"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { sdgs, solutions } from "@/utils/data";

export default function OurSolution() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.solutionSection}>
      <div className={styles.solutionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Solution</h2>
        </div>

        <div className={styles.sdgContainer}>
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className={styles.sdgBadge}
              style={{ backgroundColor: sdg.color }}
            >
              <div className={styles.sdgNumber}>{sdg.number}</div>
              <div className={styles.sdgTitle}>{sdg.title}</div>
            </div>
          ))}
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.previewText}>
                  {openIndex === index ? solution.fullText : solution.preview}
                </p>
              </div>

              <button
                className={styles.readMoreButton}
                onClick={() => toggleDropdown(index)}
              >
                {openIndex === index ? "Read less" : "Read more"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
