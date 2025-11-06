import React from "react";
import styles from "./styles.module.css";

export default function ImpactQuote() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.borderAccent}>
          <blockquote className={styles.blockquote}>
            <p className={styles.mainQuote}>
              We tackle the intersection of poverty and healthcare inequality.
            </p>

            <p className={styles.subQuote}>
              Our goal is to provide sustainable interventions that reduce
              out-of-pocket healthcare costs for vulnerable populations
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
