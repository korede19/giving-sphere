import { createClient } from "@supabase/supabase-js";

interface PaystackResponse {
  status: boolean;
  message: string;
  data: {
    authorization: {
      authorization_code: string;
      card_type: string;
      last4: string;
      exp_month: string;
      exp_year: string;
      bin: string;
      bank: string;
      channel: string;
      signature: string;
      reusable: boolean;
      country_code: string;
    };
    reference: string;
    amount: number;
    currency: string;
    transaction_date: string;
    status: string;
    domain: string;
    customer: {
      id: number;
      email: string;
      customer_code: string;
      first_name: string;
      last_name: string;
      phone: string;
    };
  };
}

export interface Donation {
  id?: string;
  reference: string;
  amount: number;
  email: string;
  donation_type: string;
  dedication?: string;
  paid_at: string;
  paystack_domain: string;
  fees?: number;
  currency?: string;
  channel?: string;
  ip_address?: string;
  authorization_code?: string;
  paystack_customer_id?: number;
  paystack_response?: PaystackResponse;
  created_at?: string;
  updated_at?: string;
}

export interface RecurringDonation {
  id?: string;
  customer_email: string;
  authorization_code: string;
  amount: number;
  frequency: string;
  next_charge_date: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function donationExists(reference: string): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("donations")
    .select("reference")
    .eq("reference", reference)
    .single();

  return !!data && !error;
}

export async function saveDonation(donation: Donation) {
  const { data, error } = await supabaseAdmin
    .from("donations")
    .insert(donation)
    .select()
    .single();

  if (error) {
    console.error("Error saving donation:", error);
    throw error;
  }

  return data;
}

export async function saveRecurringDonation(recurring: RecurringDonation) {
  const { data, error } = await supabaseAdmin
    .from("recurring_donations")
    .insert(recurring)
    .select()
    .single();

  if (error) {
    console.error("Error saving recurring donation:", error);
    throw error;
  }

  return data;
}

export async function getDonationsByEmail(email: string) {
  const { data, error } = await supabaseAdmin
    .from("donations")
    .select("*")
    .eq("email", email)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching donations:", error);
    throw error;
  }

  return data;
}

export async function getTotalDonations() {
  const { data, error } = await supabaseAdmin
    .from("donations")
    .select("amount");

  if (error) {
    console.error("Error fetching total donations:", error);
    throw error;
  }

  const total =
    data?.reduce((sum, donation) => sum + Number(donation.amount), 0) || 0;
  return total;
}
