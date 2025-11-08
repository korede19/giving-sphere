import { NextResponse } from "next/server";
import {
  donationExists,
  saveDonation,
  saveRecurringDonation,
  type Donation,
  type RecurringDonation,
} from "@/lib/supabase";

export async function POST(request: Request) {
  // Only log in development
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    console.log("=== 🚀 VERIFY PAYMENT API CALLED ===");
    console.log("Timestamp:", new Date().toISOString());
  }

  try {
    const body = await request.json();
    console.log("📦 Request body received:", body);

    const { reference, donationType, dedication } = body;

    // Validate input
    if (!reference) {
      console.error("❌ No reference provided");
      return NextResponse.json(
        { status: "error", message: "Reference is required" },
        { status: 400 }
      );
    }

    console.log("🔍 Checking for duplicate transaction:", reference);
    // Check if this reference has already been processed
    const exists = await donationExists(reference);

    if (exists) {
      console.log("⚠️ Duplicate transaction attempt:", reference);
      return NextResponse.json(
        {
          status: "error",
          message: "This donation has already been processed",
        },
        { status: 400 }
      );
    }

    // Verify payment with Paystack
    console.log("🔍 Verifying payment with Paystack:", reference);
    const paystackUrl = `https://api.paystack.co/transaction/verify/${reference}`;
    console.log("Paystack URL:", paystackUrl);

    const response = await fetch(paystackUrl, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    console.log("📡 Paystack response status:", response.status);

    if (!response.ok) {
      console.error(
        "❌ Paystack API error:",
        response.status,
        response.statusText
      );
      const errorText = await response.text();
      console.error("Error response:", errorText);
      return NextResponse.json(
        { status: "error", message: "Failed to verify payment with Paystack" },
        { status: 400 }
      );
    }

    const data = await response.json();
    console.log(
      "✅ Paystack verification response:",
      JSON.stringify(data, null, 2)
    );

    // Check if payment was successful
    if (!data.status || data.data.status !== "success") {
      console.log("❌ Payment not successful:", data.data.status);
      return NextResponse.json(
        { status: "error", message: "Payment was not successful" },
        { status: 400 }
      );
    }

    // Extract verified data from Paystack
    const verifiedAmount = data.data.amount / 100;
    const customerEmail = data.data.customer.email;
    const transactionReference = data.data.reference;
    const paidAt = data.data.paidAt || data.data.paid_at;
    const authorizationCode = data.data.authorization?.authorization_code;
    const domain = data.data.domain;

    console.log("💰 Payment details:", {
      amount: verifiedAmount,
      email: customerEmail,
      reference: transactionReference,
      domain: domain,
    });

    // if (process.env.NODE_ENV === "production" && domain === "test") {
    //   console.warn("⚠️ Test transaction attempted in production:", reference);
    //   return NextResponse.json(
    //     {
    //       status: "error",
    //       message: "Test transactions are not allowed in production",
    //     },
    //     { status: 400 }
    //   );
    // }

    console.log("ℹ️ Processing transaction in domain:", domain);

    // Validate minimum amount
    if (verifiedAmount < 100) {
      console.error("❌ Amount too low:", verifiedAmount);
      return NextResponse.json(
        { status: "error", message: "Invalid donation amount" },
        { status: 400 }
      );
    }

    // Prepare donation data
    const donationData: Donation = {
      reference: transactionReference,
      amount: verifiedAmount,
      email: customerEmail,
      donation_type: donationType || "onetime",
      dedication: dedication || null,
      paid_at: paidAt,
      paystack_domain: domain,
      fees: data.data.fees ? data.data.fees / 100 : undefined,
      currency: data.data.currency,
      channel: data.data.channel,
      ip_address: data.data.ip_address,
      authorization_code: authorizationCode,
      paystack_customer_id: data.data.customer.id,
      paystack_response: data.data,
    };

    console.log("💾 Saving donation to database...");
    try {
      const savedDonation = await saveDonation(donationData);
      console.log("✅ Donation saved successfully:", savedDonation.id);

      // For monthly donations, set up recurring billing
      if (donationType === "monthly" && authorizationCode) {
        console.log("📅 Setting up recurring donation...");

        const nextChargeDate = new Date();
        nextChargeDate.setMonth(nextChargeDate.getMonth() + 1);

        const recurringData: RecurringDonation = {
          customer_email: customerEmail,
          authorization_code: authorizationCode,
          amount: verifiedAmount,
          frequency: "monthly",
          next_charge_date: nextChargeDate.toISOString(),
          status: "active",
        };

        try {
          await saveRecurringDonation(recurringData);
          console.log("✅ Recurring donation setup complete");
        } catch (recurringError) {
          console.error(
            "⚠️ Failed to setup recurring donation:",
            recurringError
          );
        }
      }

      console.log("🎉 Payment verification successful!");
      return NextResponse.json({
        status: "success",
        message: "Payment verified successfully",
        data: {
          reference: transactionReference,
          amount: verifiedAmount,
          email: customerEmail,
          donationType: donationType,
          id: savedDonation.id,
        },
      });
    } catch (dbError: unknown) {
      console.error("❌ Database error:", dbError);

      const error = dbError as { code?: string; message?: string };
      if (error.code === "23505") {
        console.log("⚠️ Race condition detected - donation already exists");
        return NextResponse.json(
          {
            status: "error",
            message: "This donation has already been processed",
          },
          { status: 400 }
        );
      }

      console.error("🚨 CRITICAL: Payment verified but not saved:", {
        reference: transactionReference,
        amount: verifiedAmount,
        email: customerEmail,
        error: error.message || String(dbError),
      });

      return NextResponse.json(
        {
          status: "error",
          message:
            "Payment successful but database error occurred. Please contact support with reference: " +
            transactionReference,
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("❌ Payment verification error:", error);
    const err = error as Error;
    console.error("Error stack:", err.stack);

    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error. Please contact support.",
        debug: process.env.NODE_ENV === "development" ? err.message : undefined,
      },
      { status: 500 }
    );
  }
}
