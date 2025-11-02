"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { solutions } from "@/utils/data";
import Image from "next/image";

export default function OurSolution() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.solutionSection}>
      <div className={styles.solutionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our solution</h2>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
              <Image
                src={solution.image}
                width={200}
                height={200}
                alt="icon"
                className={styles.imageIcon}
              />
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
