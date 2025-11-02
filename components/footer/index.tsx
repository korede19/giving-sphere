import LinkedIn from "@/svg/linkedln";
import styles from "./styles.module.css";
import Instagram from "@/svg/instagram";

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
                <a href="/our-work" className={styles.footerLink}>
                  Our Work
                </a>
              </li>
              <li>
                <a href="/news&resources" className={styles.footerLink}>
                  News & Resources
                </a>
              </li>
              <li>
                <a href="/get-involved" className={styles.footerLink}>
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Learn More</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="/about/#teams" className={styles.footerLink}>
                  Meet Our Team
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Donate
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className={styles.footerLink}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Get In Touch</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerText}>
                📧 info@givingspherecharity.org
              </li>
              <li className={styles.footerText}>
                🎗️ Registered Charity no: 179000
              </li>
              <li className={styles.footerText}>📍 Lagos State, Nigeria</li>
            </ul>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/givingspherecharity/"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/givingsphere-charity-foundation"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Givingsphere. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <a href="/privacy-policy" className={styles.footerBottomLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>|</span>
            <a href="/terms-of-use" className={styles.footerBottomLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
