import React from "react";
import styles from "./styles.module.css";

const WorkBanner = () => {
  return (
    <div className={styles.container}>
      <h2>Our Work & Goal</h2>
      <p>
        We tackle the intersection of poverty and healthcare inequality. Our
        work focuses on breaking the cycle of out-of-pocket medical payment
        crisis that deepens poverty. We do this by offering both immediate
        relief and long-term solutions.
      </p>
      <p>
        To provide sustainable interventions that reduce out-of-pocket
        healthcare payments for people at risk
      </p>
    </div>
  );
};

export default WorkBanner;
