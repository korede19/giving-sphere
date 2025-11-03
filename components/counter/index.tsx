"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Family from "@/svg/family";
import Partner from "@/svg/partner";
import Link from "next/link";
import Communities from "@/svg/communities";

export default function ScrollCounter() {
  const [familiesCount, setFamiliesCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(setFamiliesCount, 1500, 2000);
            animateCounter(setPartnersCount, 50, 2000);
            animateCounter(setCommunityCount, 16, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration: number
  ) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  return (
    <>
      <div className={styles.counterContainer} ref={counterRef}>
        <h2>Our impact in numbers</h2>
        <div className={styles.counterWrapper}>
          <div className={styles.counterItem}>
            <Family />
            <div className={styles.counterNumber}>
              {familiesCount.toLocaleString()}
              <span className={styles.plus}>+</span>
            </div>
            <p className={styles.counterLabel}>Families Impacted</p>
          </div>
          <div className={styles.counterItem}>
            <Partner />
            <div className={styles.counterNumber}>
              {partnersCount}
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.counterLabel}>Our Partners</div>
          </div>
          <div className={styles.counterItem}>
            <Communities />
            <div className={styles.counterNumber}>
              {communityCount}
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.counterLabel}>
              Communities across 5 states
            </div>
          </div>
        </div>
        <button className={styles.partnerBtn}>
          <Link href="/get-involved/#partner">Partner with us</Link>
        </button>
      </div>
    </>
  );
}
