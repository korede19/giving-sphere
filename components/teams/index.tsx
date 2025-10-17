"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { teamMembers } from "@/utils/data";

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= teamMembers.length
          ? 0
          : prevIndex + itemsPerPage
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= teamMembers.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? teamMembers.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);

  return (
    <section className={styles.teamSection} id="teams">
      <div className={styles.teamContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
        </div>

        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className={styles.navButton}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className={styles.slider}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${
                  (currentIndex / itemsPerPage) * 100
                }%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className={styles.slidePage}>
                  {teamMembers
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((member, idx) => (
                      <div key={idx} className={styles.teamCard}>
                        <div className={styles.avatar}>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <p className={styles.memberRole}>{member.role}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={styles.navButton}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        <div className={styles.pagination}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`${styles.dot} ${
                currentPage === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
