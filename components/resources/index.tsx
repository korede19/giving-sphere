"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { newsItems } from "@/utils/data";

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? newsItems
      : newsItems.filter((item) => item.type === activeFilter);

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>News & Resources</h2>
          <p className={styles.sectionSubtitle}>
            Stay updated with our latest news, reports, and publications
          </p>
        </div>

        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "all" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "news" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("news")}
          >
            News & Updates
          </button>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "resource" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("resource")}
          >
            Resources
          </button>
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span className={styles.badge}>{item.category}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.date}>📅 {item.date}</span>
                  {item.fileSize && (
                    <span className={styles.fileSize}>📄 {item.fileSize}</span>
                  )}
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>

                {item.type === "news" ? (
                  <a href={item.link} className={styles.readMoreBtn}>
                    Read More →
                  </a>
                ) : (
                  <a
                    href={item.downloadUrl}
                    className={styles.downloadBtn}
                    download
                  >
                    <span className={styles.downloadIcon}>⬇</span>
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className={styles.emptyState}>
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
