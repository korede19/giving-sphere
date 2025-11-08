"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { partnershipTypes, volunteerBenefits } from "@/utils/data";
import Image from "next/image";
import List from "@/svg/list";

export default function VolunteerPartner() {
  const [copiedEmail, setCopiedEmail] = useState("");

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(""), 2000);
  };

  return (
    <>
      <section className={styles.volunteerContainer} id="volunteer">
        <div className={styles.container}>
          {/* Volunteer Section */}
          <div className={styles.volunteerSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Volunteer with us</h2>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <p className={styles.mainText}>
                  We rely on the generosity and talents of people like you.
                  Whether it&apos;s contributing your skills, lending a hand at
                  our outreaches, or supporting our team, every effort brings us
                  closer to reaching more families in need.
                </p>

                <div className={styles.benefitsGrid}>
                  {volunteerBenefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>{benefit.icon}</span>
                      <span className={styles.benefitText}>{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <p className={styles.welcomeText}>
                  To volunteer, kindly send your expression of interest to:
                </p>

                <div className={styles.contactBox}>
                  <a
                    href="mailto:info@givingspherecharity.org"
                    className={styles.emailLink}
                  >
                    info@givingspherecharity.org
                  </a>
                  <button
                    onClick={() => copyEmail("info@givingspherecharity.org")}
                    className={styles.copyButton}
                    title="Copy email"
                  >
                    {copiedEmail === "info@givingspherecharity.org"
                      ? "✓"
                      : "📋"}
                  </button>
                </div>
              </div>

              <div className={styles.imageSection}>
                <Image
                  src={"/assets/volunteer.webp"}
                  alt="Volunteer"
                  width={300}
                  height={600}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className={styles.partnerContainer} id="partner">
        <div className={styles.partnerSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partner with us</h2>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.imageSection}>
              <Image
                src={"/assets/partnership.jpg"}
                alt="Volunteer"
                width={300}
                height={300}
                className={styles.imageTwo}
              />
            </div>

            <div className={styles.textContent}>
              <p className={styles.mainText}>
                Whether you&apos;re a company, hospital, foundation, or
                institution, we&apos;d love to explore how we can work together.
                To start a conversation, please contact us at:
              </p>

              <div className={styles.contactBox}>
                <a
                  href="mailto:info@givingspherecharity.org"
                  className={styles.emailLink}
                >
                  info@givingspherecharity.org
                </a>
                <button
                  onClick={() => copyEmail("info@givingspherecharity.org")}
                  className={styles.copyButton}
                  title="Copy email"
                >
                  {copiedEmail === "info@givingspherecharity.org" ? "✓" : "📋"}
                </button>
              </div>

              <div className={styles.contributionsSection}>
                <h3 className={styles.subheading}>
                  Our partners contribute through:
                </h3>
                <ul className={styles.contributionsList}>
                  {partnershipTypes.map((type, index) => (
                    <li key={index} className={styles.contributionItem}>
                      <span className={styles.checkmark}>
                        <List />
                      </span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
