import { equityFocus, outreachPrograms } from "@/utils/data";
import styles from "./styles.module.css";

export default function HealthEquityOutreach() {
  return (
    <>
      <section className={styles.HealthEquityOutreach}>
        <div className={styles.container}>
          {/* Health Equity Section */}
          <div className={styles.equitySection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Health equity & financial protection
              </h2>
            </div>

            <div className={styles.introBlock}>
              <p className={styles.introText}>
                Too many Nigerians especially low-income and underserved
                households face impossible choices between healthcare and
                survival and we are working to change that. Our work in this
                area focuses on:
              </p>
            </div>

            <div className={styles.focusGrid}>
              {equityFocus.map((item, index) => (
                <div key={index} className={styles.focusCard}>
                  <span className={styles.focusIcon}>{item.icon}</span>
                  <p className={styles.focusText}>
                    {item.text}
                    {item.hasLink && (
                      <a href="/news-resources" className={styles.seeMoreLink}>
                        See more →
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach Section */}
      <section className={styles.outreachContainer}>
        <div className={styles.outreachSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Community outreach & capacity building
            </h2>
          </div>
          <div className={styles.introBlock}>
            <p className={styles.introText}>
              We believe that real impact begins with being present. Our
              community outreach efforts are designed to uplift individuals &
              families through direct engagement, seasonal support, and locally
              led partnerships bringing relief and care to those often
              overlooked.
            </p>
          </div>

          <div className={styles.programsGrid}>
            {outreachPrograms.map((program, index) => (
              <div
                key={index}
                className={`${styles.programCard} ${
                  program.highlight ? styles.highlighted : ""
                }`}
              >
                <div className={styles.programIcon}>{program.icon}</div>
                <h3 className={styles.programTitle}>{program.title}</h3>
                <p className={styles.programDescription}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Want to make a difference?</h3>
              <p className={styles.ctaText}>
                Partner with us to bring healthcare and support to underserved
                communities
              </p>
              <a href="/partnerships" className={styles.ctaButton}>
                Partner with us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
