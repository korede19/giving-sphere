import styles from "./styles.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* About Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>About Us</h3>
            <p className={styles.footerText}>
              We are dedicated to making a positive impact in communities
              through collaboration, compassion, and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="/about" className={styles.footerLink}>
                  About
                </a>
              </li>
              <li>
                <a href="/values" className={styles.footerLink}>
                  Our Values
                </a>
              </li>
              <li>
                <a href="/partners" className={styles.footerLink}>
                  Partners
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Programs</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="/programs/education" className={styles.footerLink}>
                  Education
                </a>
              </li>
              <li>
                <a href="/programs/health" className={styles.footerLink}>
                  Health
                </a>
              </li>
              <li>
                <a href="/programs/community" className={styles.footerLink}>
                  Community
                </a>
              </li>
              <li>
                <a href="/programs/youth" className={styles.footerLink}>
                  Youth Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Get In Touch</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerText}>📧 info@organization.org</li>
              <li className={styles.footerText}>📞 +234 (0) 123 456 7890</li>
              <li className={styles.footerText}>
                📍 Ibadan, Oyo State, Nigeria
              </li>
            </ul>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                FB
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                TW
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                IG
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                LI
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Organization Name. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <a href="/privacy" className={styles.footerBottomLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>|</span>
            <a href="/terms" className={styles.footerBottomLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
