"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { homeImpactStories, impactStories } from "@/utils/data";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === impactStories.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };
  return (
    <div className={styles.impactStories}>
      <h3>Testimonials</h3>

      <div
        className={styles.carouselWrapper}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.carousel}>
          {homeImpactStories.map((story, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${
                currentTestimonial === index ? styles.active : ""
              }`}
              style={{
                opacity: currentTestimonial === index ? 1 : 0,
                transform:
                  currentTestimonial === index ? "scale(1)" : "scale(0.95)",
                position:
                  currentTestimonial === index ? "relative" : "absolute",
              }}
            >
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.testimonialQuote}>{story.quote}</p>
              <div className={styles.testimonialAuthor}>
                <strong>{story.name}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselDots}>
          {homeImpactStories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`${styles.dot} ${
                currentTestimonial === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
