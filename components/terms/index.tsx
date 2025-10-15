import { termsSections } from "@/utils/data";
import styles from "./styles.module.css";

export default function TermsOfUse() {
  return (
    <section className={styles.termsSection}>
      <div className={styles.termsContainer}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Terms of Use</h1>
          <p className={styles.subtitle}>
            Welcome to Givingsphere Charity Foundation. By using our website,
            you agree to these Terms of Use. Please read them carefully.
          </p>
        </div>

        <div className={styles.content}>
          {termsSections.map((section, index) => (
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

          <div className={styles.agreementBox}>
            <div className={styles.agreementIcon}>⚖️</div>
            <p className={styles.agreementText}>
              By continuing to use this website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Use.
            </p>
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
            <div className={styles.footerLinks}>
              <a href="/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </a>
              <span className={styles.separator}>|</span>
              <a href="/get-involved" className={styles.footerLink}>
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
