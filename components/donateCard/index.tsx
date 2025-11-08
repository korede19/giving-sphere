"use client";
import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import toast from "react-hot-toast";
import styles from "./styles.module.css";

interface DonateCardProps {
  title?: string;
  subtitle?: string;
  learnMoreText?: string;
  onLearnMore?: () => void;
  onDonate?: (amount: number, isMonthly: boolean, dedication?: string) => void;
  paystackPublicKey: string;
}

const DonateCard: React.FC<DonateCardProps> = ({
  title = "At this very moment a life is at risk.",
  subtitle = "7 out of 10 Nigerians are denied healthcare because they can't afford to pay. Your donation helps end the out-of-pocket crisis driving families into poverty.",
  onDonate,
  paystackPublicKey,
}) => {
  const [donationAmount, setDonationAmount] = useState<"onetime" | "monthly">(
    "monthly"
  );
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [dedication] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  const predefinedAmounts = [1000, 5000, 10000, 20000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(Number(value))) {
      setSelectedAmount(Number(value));
    }
  };

  const amount = customAmount ? Number(customAmount) : selectedAmount;

  const config = {
    reference: `DON-${new Date().getTime()}-${Math.random()
      .toString(36)
      .substring(7)}`,
    email: email || "donor@example.com",
    amount: amount * 100,
    publicKey: paystackPublicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Donation Type",
          variable_name: "donation_type",
          value: donationAmount,
        },
        {
          display_name: "Dedication",
          variable_name: "dedication",
          value: dedication,
        },
      ],
    },
    channels: ["card", "bank", "ussd", "bank_transfer"],
  };

  interface PaystackReference {
    reference: string;
    trans: string;
    status: string;
    message: string;
    transaction: string;
    trxref: string;
  }

  const onSuccess = async (reference: PaystackReference) => {
    setIsProcessing(false);
    setShowEmailInput(false);

    // Show loading toast
    const loadingToast = toast.loading("Verifying payment...");

    try {
      const verifyResponse = await fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference: reference.reference,
          amount: amount,
          donationType: donationAmount,
          dedication: dedication,
        }),
      });

      const verifyData = await verifyResponse.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (verifyData.status === "success") {
        // Call the onDonate callback
        if (onDonate) {
          onDonate(amount, donationAmount === "monthly", dedication);
        }

        // Show success toast
        toast.success(
          `Thank you for your donation of ₦${amount.toLocaleString()}! 🎉`,
          {
            duration: 5000,
            icon: "💚",
          }
        );
      } else {
        toast.error("Payment verification failed. Please contact support.", {
          duration: 6000,
        });
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.dismiss(loadingToast);
      toast.error(
        `Payment verification failed. Reference: ${reference.reference}`,
        {
          duration: 8000,
        }
      );
    }
  };

  const onClose = () => {
    setIsProcessing(false);
    setShowEmailInput(false);
    console.log("Payment window closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handleDonateClick = () => {
    if (amount < 100) {
      toast.error("Minimum donation amount is ₦100", {
        duration: 3000,
      });
      return;
    }

    if (!email) {
      setShowEmailInput(true);
      return;
    }

    handleDonate();
  };

  const handleDonate = () => {
    setIsProcessing(true);
    initializePayment({ onSuccess, onClose });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      handleDonate();
    } else {
      toast.error("Please enter a valid email address", {
        duration: 3000,
      });
    }
  };

  return (
    <div
      className={styles.donateCard}
      style={{
        position: "relative",
        zIndex: 9999,
        pointerEvents: "auto",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.donationSection}>
          <div className={styles.donationTypeToggle}>
            <button
              className={`${styles.toggleBtn} ${
                donationAmount === "onetime" ? styles.active : ""
              }`}
              onClick={() => setDonationAmount("onetime")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              One Time
            </button>
            <button
              className={`${styles.toggleBtn} ${
                donationAmount === "monthly" ? styles.active : ""
              }`}
              onClick={() => setDonationAmount("monthly")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Monthly
            </button>
          </div>
          <div className={styles.amountGrid}>
            {predefinedAmounts.map((amt) => (
              <button
                key={amt}
                className={`${styles.amountBtn} ${
                  selectedAmount === amt && !customAmount
                    ? styles.selectedAmount
                    : ""
                }`}
                onClick={() => handleAmountSelect(amt)}
                style={{ pointerEvents: "auto", cursor: "pointer" }}
              >
                ₦{amt.toLocaleString()}
              </button>
            ))}
          </div>

          <div className={styles.customAmountSection}>
            <div
              className={styles.customAmountInput}
              style={{ pointerEvents: "auto" }}
            >
              <span className={styles.currencySymbol}>₦</span>
              <input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className={styles.amountInput}
                style={{ pointerEvents: "auto", cursor: "text" }}
              />
              <span className={styles.currency}>NGN</span>
            </div>
          </div>

          {showEmailInput && (
            <form onSubmit={handleEmailSubmit} style={{ marginTop: "1rem" }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.mailInput}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  marginBottom: "0.5rem",
                  pointerEvents: "auto",
                  cursor: "text",
                }}
              />
            </form>
          )}

          <button
            className={styles.donateBtn}
            onClick={handleDonateClick}
            disabled={isProcessing}
            style={{
              pointerEvents: "auto",
              cursor: isProcessing ? "not-allowed" : "pointer",
              opacity: isProcessing ? 0.7 : 1,
            }}
          >
            {isProcessing
              ? "PROCESSING..."
              : showEmailInput && !email
              ? "ENTER EMAIL TO CONTINUE"
              : `DONATE ₦${amount.toLocaleString()} ${
                  donationAmount === "monthly" ? "MONTHLY" : ""
                }`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
