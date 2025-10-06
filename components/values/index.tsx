"use client";
import { values } from "@/utils/data";
import styles from "./styles.module.css";
import { useState, useEffect, useRef } from "react";

export default function OurValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <section className={styles.valuesSection} ref={sectionRef}>
        <div className={styles.valuesContainer}>
          <div
            className={`${styles.sectionHeader} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>What guides us every day</p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div
                key={index}
                className={`${styles.valueCard} ${
                  isVisible ? styles.visible : ""
                }`}
              >
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
