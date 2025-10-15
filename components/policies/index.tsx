import { sections } from "@/utils/data";
import styles from "./styles.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.policySection}>
      <div className={styles.policyContainer}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Your privacy is important to us. This Privacy Policy explains how
            Givingsphere Charity Foundation collects, uses, and protects your
            information.
          </p>
        </div>

        <div className={styles.content}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{section.number}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>

              {section.items ? (
                <ul className={styles.itemList}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.sectionContent}>{section.content}</p>
              )}
            </div>
          ))}

          <div className={styles.contactSection}>
            <div className={styles.contactCard}>
              <h2 className={styles.contactTitle}>7. Contact us</h2>
              <p className={styles.contactText}>
                If you have questions about these Terms or our Privacy Policy,
                please contact us at:
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <a
                    href="mailto:info@givingspherecharity.org"
                    className={styles.contactLink}
                  >
                    info@givingspherecharity.org
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span className={styles.contactInfo}>
                    +234 (0) 123 456 7890
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span className={styles.contactInfo}>
                    Ibadan, Oyo State, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <p className={styles.lastUpdated}>
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
