"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface DonateCardProps {
  title?: string;
  subtitle?: string;
  learnMoreText?: string;
  onLearnMore?: () => void;
  onDonate?: (amount: number, isMonthly: boolean, dedication?: string) => void;
}

const DonateCard: React.FC<DonateCardProps> = ({
  title = "At this very moment a life is at risk.",
  subtitle = "7 out of 10 Nigerians are denied healthcare because they can't afford to pay. Your donation helps end the out-of-pocket crisis driving families into poverty.",
  onDonate,
}) => {
  const [donationAmount, setDonationAmount] = useState<"onetime" | "monthly">(
    "monthly"
  );
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [dedication] = useState<string>("");

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

  const handleDonate = () => {
    const amount = customAmount ? Number(customAmount) : selectedAmount;
    if (onDonate) {
      onDonate(amount, donationAmount === "monthly", dedication);
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
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                className={`${styles.amountBtn} ${
                  selectedAmount === amount && !customAmount
                    ? styles.selectedAmount
                    : ""
                }`}
                onClick={() => handleAmountSelect(amount)}
                style={{ pointerEvents: "auto", cursor: "pointer" }}
              >
                ₦{amount.toLocaleString()}
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
          <button
            className={styles.donateBtn}
            onClick={handleDonate}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            DONATE ₦{(customAmount || selectedAmount).toLocaleString()}{" "}
            {donationAmount === "monthly" ? "MONTHLY" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
