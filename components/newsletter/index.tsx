"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setMessage("Thank you for joining!");
      setEmail("");
      setIsSubmitting(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }, 1000);
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaHeading}>
          The fight for girls&apos; education won&apos;t be won by girls alone.
        </h2>

        <p className={styles.ctaSubtext}>
          Sign up to learn how you can help support Malala Fund and receive the
          latest updates on our work.
        </p>

        <div className={styles.ctaForm}>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              disabled={isSubmitting}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
            <button
              onClick={handleSubmit}
              className={styles.joinButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "JOINING..." : "JOIN"}
            </button>
          </div>

          {message && (
            <p
              className={`${styles.message} ${
                message.includes("Thank") ? styles.success : styles.error
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
