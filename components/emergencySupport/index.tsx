import { emergencyCases } from "@/utils/data";
import styles from "./styles.module.css";
import Image from "next/image";

export default function EmergencyResponse() {
  return (
    <section className={styles.emergencySection} id="emergency-support">
      <div className={styles.emergencyContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Emergency response & crisis support
          </h2>
        </div>

        <div className={styles.introText}>
          <p className={styles.mainDescription}>
            When a crisis occurs, we provide rapid aid to communities affected
            by conflict, displacement, or sudden health crises. Our emergency
            response network gives us the ability to mobilize support quickly to
            protect at-risk populations.
          </p>
        </div>

        <div className={styles.recentWork}>
          <h3 className={styles.subheading}>
            Our recent work in emergencies across Nigeria:
          </h3>
        </div>

        <div className={styles.casesGrid}>
          {emergencyCases.map((emergencyCase, index) => (
            <div key={index} className={styles.caseCard}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={emergencyCase.image}
                  alt="placeholder"
                  width={300}
                  height={200}
                  className={styles.caseImage}
                  priority
                />
              </div>
              <div className={styles.caseContent}>
                <h4 className={styles.caseTitle}>{emergencyCase.title}</h4>
                <p className={styles.caseDescription}>
                  {emergencyCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
