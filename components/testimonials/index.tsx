"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { testimonials } from "@/utils/data";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Testimonials</h2>
          <p className={styles.sectionSubtitle}>
            Hear from the lives we&apos;ve touched
          </p>
        </div>

        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className={styles.carousel}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  currentIndex === index ? styles.active : ""
                }`}
                style={{
                  backgroundImage:
                    testimonial.type !== "video"
                      ? `url(${testimonial.image})`
                      : "none",
                  display: currentIndex === index ? "flex" : "none",
                }}
              >
                <div className={styles.overlay} />

                <div className={styles.content}>
                  {testimonial.type === "text" && (
                    <div className={styles.textTestimonial}>
                      <div className={styles.quoteIcon}>&quot;</div>
                      <p className={styles.quote}>{testimonial.quote}</p>
                      <div className={styles.authorInfo}>
                        <p className={styles.author}>— {testimonial.author}</p>
                        {testimonial.role && (
                          <p className={styles.role}>{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {testimonial.type === "audio" && (
                    <div className={styles.audioTestimonial}>
                      <div className={styles.mediaIcon}>🎵</div>
                      <h3 className={styles.mediaTitle}>{testimonial.title}</h3>
                      <audio
                        controls
                        className={styles.audioPlayer}
                        src={testimonial.audioUrl}
                      >
                        Your browser does not support the audio element.
                      </audio>
                      <p className={styles.mediaAuthor}>{testimonial.author}</p>
                      <p className={styles.audioNote}>
                        Listen to this heartfelt message from our beneficiary
                      </p>
                    </div>
                  )}

                  {testimonial.type === "video" && (
                    <div className={styles.videoTestimonial}>
                      <div className={styles.videoWrapper}>
                        <video
                          controls
                          className={styles.videoPlayer}
                          poster={testimonial.thumbnail}
                          src={testimonial.videoUrl}
                        >
                          Your browser does not support the video element.
                        </video>
                      </div>
                      <div className={styles.videoInfo}>
                        <h3 className={styles.mediaTitle}>
                          {testimonial.title}
                        </h3>
                        <p className={styles.mediaAuthor}>
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ›
          </button>

          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  currentIndex === index ? styles.activeIndicator : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
