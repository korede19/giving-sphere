"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";

const DonateCard = dynamic(() => import("@/components/donateCard"), {
  ssr: false,
});

export default function DonateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <button onClick={openModal} className={styles.triggerButton}>
        DONATE
      </button>

      {/* Modal */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Your Donate Component */}
            <div className={styles.donateWrapper}>
              <DonateCard
                paystackPublicKey={process.env.NEXT_PUBLIC_PAYSTACK_KEY!}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
