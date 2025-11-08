import React from "react";
import styles from "./styles.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <p className={styles.loaderText}>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
