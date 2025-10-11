import React from "react";
import styles from "./styles.module.css";

const AboutSection = () => {
  return (
    <div className={styles.contentContain}>
      <div className={styles.container}>
        <div className={styles.rowOne}>
          <div className={styles.colOne}>
            <h2>59%</h2>
          </div>
          <div className={styles.colTwo}>
            <h2>
              of healthcare costs are paid out-of-pocket, pushing millions into
              poverty (WHO).
            </h2>
            <p>
              In 2024, according to a development update report by the World
              Bank Group (WBG), the poverty rate increased to 56%, representing
              about 129 million people.
            </p>
          </div>
        </div>
        <p>
          Out-of-pocket (OOP) payments for healthcare stand out as a major yet
          often overlooked contributor. The United Nations Sustainable
          Development Goals (UN SDG) report confirms that OOP health payments
          can drive individuals into extreme poverty, worsening financial
          hardship. This is compounded by the country’s minimal healthcare
          budget allocation over the years (International Budget Partnership,
          2023).
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
