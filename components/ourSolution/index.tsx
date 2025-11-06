"use client";
import styles from "./styles.module.css";
import { solutions } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function OurSolution() {
  return (
    <section className={styles.solutionSection} id="solution">
      <div className={styles.solutionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our solution</h2>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.previewText}>{solution.preview}</p>
              </div>

              <button className={styles.readMoreButton}>
                <Link href={solution.link}>Learn more</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cardFooter}>
        {solutions.map((solution, index) => (
          <Image
            key={index}
            src={solution.image}
            width={200}
            height={200}
            alt="icon"
            className={styles.imageIcon}
          />
        ))}
      </div>
    </section>
  );
}
