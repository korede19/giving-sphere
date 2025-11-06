import React from "react";
import styles from "./styles.module.css";

const MakeADifference = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Want to make a difference?</h3>
          <p className={styles.ctaText}>
            Partner with us to bring healthcare and support to underserved
            communities
          </p>
          <a href="/get-involved/#partner" className={styles.ctaButton}>
            Partner with us
          </a>
        </div>
      </div>
    </div>
  );
};

export default MakeADifference;
