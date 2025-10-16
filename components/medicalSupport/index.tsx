"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { howItWorksSteps, impactStories } from "@/utils/data";

export default function MedicalSupport() {
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
    <section className={styles.medicalSection} id="1k-support">
      <div className={styles.medicalContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Medical support services (The 1K helpline)
          </h2>
        </div>

        <div className={styles.introSection}>
          <p className={styles.introText}>
            Through our flagship initiative, <strong>The 1K Helpline</strong>,
            we provide direct financial assistance to patients who cannot afford
            healthcare access. From blood transfusions, emergency surgery, eye
            tests, diabetes, cancer care and so on.
          </p>
        </div>

        <div className={styles.howItWorks}>
          <h3 className={styles.subsectionTitle}>How the 1K Helpline works:</h3>

          <div className={styles.stepsGrid}>
            {howItWorksSteps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.testimonialSection}>
          <h3 className={styles.subsectionTitle}>
            Hear from our impacted families:
          </h3>
          <div className={styles.videoPlaceholder}>
            <div className={styles.playIcon}>▶</div>
            <p className={styles.videoText}>
              Video/Audio Testimonial Placeholder
            </p>
            <p className={styles.videoSubtext}>
              Insert your video or audio player here
            </p>
          </div>
        </div>

        <div className={styles.impactStories}>
          <h3 className={styles.subsectionTitle}>
            Other impact stories from the 1K helpline
          </h3>

          <div
            className={styles.carouselWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.carousel}>
              {impactStories.map((story, index) => (
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
                    <span className={styles.testimonialStory}>
                      {story.story}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.carouselDots}>
              {impactStories.map((_, index) => (
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
      </div>
    </section>
  );
}
