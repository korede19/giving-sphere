import React from "react";
import styles from "./styles.module.css";

const WorkBanner = () => {
  return (
    <div className={styles.container}>
      <h2>Our work</h2>
      <span className={styles.special}>
        We tackle the intersection of poverty and healthcare inequality.
      </span>
      <p>
        Our work focuses on breaking the cycle of out-of-pocket medical payment
        crisis that deepens poverty. We do this by offering both immediate
        relief and long-term solutions.
      </p>
      <p>
        Our goal is to provide sustainable interventions that reduce
        out-of-pocket healthcare costs for vulnerable populations
      </p>
    </div>
  );
};

export default WorkBanner;
