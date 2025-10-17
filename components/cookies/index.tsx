import { browserLinks, cookieTypes, thirdPartyServices } from "@/utils/data";
import styles from "./styles.module.css";

export default function CookiePolicy() {
  return (
    <section className={styles.policySection}>
      <div className={styles.policyContainer}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>GivingSphere Cookie Policy</h1>
          <p className={styles.lastUpdated}>Last updated: 10th October, 2025</p>
        </div>

        <div className={styles.content}>
          {/* Section 1 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.sectionText}>
              GivingSphere (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              uses cookies and similar tracking technologies on our website
              (https://givingsphere.org/ and related domains) to enhance your
              experience, collect analytics, and provide certain
              functionalities. This Cookie Policy explains what cookies are, how
              we use them, and your choices regarding cookies.
            </p>
            <p className={styles.sectionText}>
              By continuing to use our website, you consent to the use of
              cookies in accordance with this policy (subject to your rights
              below).
            </p>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. What are cookies?</h2>
            <p className={styles.sectionText}>
              Cookies are small text files placed on your device (computer,
              tablet, smartphone) by your web browser when you visit a website.
              They store information that helps websites remember who you are
              and your preferences. Cookies can be:
            </p>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>
                <strong>Session cookies</strong> — temporarily stored and
                deleted when you close your browser.
              </li>
              <li className={styles.listItem}>
                <strong>Persistent cookies</strong> — remain on your device
                until they expire or are deleted.
              </li>
              <li className={styles.listItem}>
                <strong>First-party cookies</strong> — set by the website
                you&apos;re visiting.
              </li>
              <li className={styles.listItem}>
                <strong>Third-party cookies</strong> — set by a different domain
                (e.g, analytics, advertising services).
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Types of cookies we use</h2>
            <p className={styles.sectionText}>
              We use cookies for the following purposes:
            </p>

            <div className={styles.tableWrapper}>
              <table className={styles.cookieTable}>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Type</th>
                    <th>Functionality</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTypes.map((cookie, index) => (
                    <tr key={index}>
                      <td className={styles.purposeCell}>{cookie.purpose}</td>
                      <td>{cookie.type}</td>
                      <td>{cookie.functionality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Specific cookies & third-party services
            </h2>
            <p className={styles.sectionText}>
              We may use third-party services (e.g. Google Analytics, Facebook
              Pixel, or ad networks) that set their own cookies. These partners
              may use cookies to collect data about your browsing across
              websites. We do not control how these third parties use their
              cookies; please refer to their privacy / cookie policies.
            </p>
            <p className={styles.sectionText}>
              Examples include (but are not limited to):
            </p>
            <ul className={styles.simpleList}>
              {thirdPartyServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Cookie duration & data collected
            </h2>
            <p className={styles.sectionText}>
              Each cookie has a name, purpose, origin, and expiry date. We do
              not collect personally identifying data just from cookies alone;
              they typically store anonymous identifiers. When combined with
              other data (e.g. logins, donation records), they may help us
              understand usage patterns, but we do not use them to profile you
              for discriminatory or invasive purposes.
            </p>
          </div>

          {/* Section 6 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Your choices & how to manage cookies
            </h2>
            <p className={styles.sectionText}>
              You can manage or delete cookies using your browser settings. You
              can:
            </p>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>
                <strong>Block all cookies</strong> — though this may break some
                functions of the site.
              </li>
              <li className={styles.listItem}>
                <strong>Delete cookies already set</strong> — via browser
                settings or tools.
              </li>
              <li className={styles.listItem}>
                <strong>Opt out of analytics cookies</strong> — by using browser
                plugins (like Google Analytics opt-out) or settings.
              </li>
              <li className={styles.listItem}>
                <strong>Use &quot;Do Not Track&quot; signals</strong> — though
                we may not fully honor them due to technical limitations.
              </li>
            </ul>

            <div className={styles.browserLinks}>
              <p className={styles.sectionText}>
                Below are links to help you manage cookies in major browsers:
              </p>
              <div className={styles.linkGrid}>
                {browserLinks.map((browser, index) => (
                  <a
                    key={index}
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    {browser.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              7. Children under 13 (or relevant age)
            </h2>
            <p className={styles.sectionText}>
              Our site is not intended for children below 13 years old (or local
              age threshold). We do not knowingly collect personal data from
              children without parental consent. Cookies are not used to
              intentionally engage or target children.
            </p>
          </div>

          {/* Section 8 */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              8. Changes to this Cookie Policy
            </h2>
            <p className={styles.sectionText}>
              We may update this Cookie Policy from time to time (for instance,
              when we introduce new features or change partners). We will post
              the updated version on this page and update the &quot;Last
              updated&quot; date above.
            </p>
          </div>

          {/* Section 9 */}
          <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>9. Contact us</h2>
            <p className={styles.sectionText}>
              If you have questions, concerns, or requests about our cookies or
              privacy practices, please contact:
            </p>
            <a
              href="mailto:info@givingsphere.org"
              className={styles.contactEmail}
            >
              info@givingsphere.org
            </a>
          </div>

          <div className={styles.consentBox}>
            <div className={styles.cookieIcon}>🍪</div>
            <p className={styles.consentText}>
              By continuing to browse this site, you acknowledge that you have
              read and understood this Cookie Policy and consent to our use of
              cookies as described.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
