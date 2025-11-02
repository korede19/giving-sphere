import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <Image
          src="/assets/about.jpg"
          width={500}
          height={500}
          alt="aboutImage"
        />
      </div>
      <div className={styles.colTwo}>
        <h2>About us</h2>
        <p>
          70% of healthcare costs are paid out-of-pocket, pushing millions into
          poverty (WHO).
          <br /> <br />
          In 2024, according to a development update report by the World Bank
          Group (WBG), the poverty rate increased to 56%, representing about 129
          million people.
          <br /> <br />
          Out-of-pocket (OOP) payments for healthcare stand out as a major yet
          often overlooked contributor. The United Nations Sustainable
          Development Goals (UN SDG) report confirms that OOP health payments
          can drive individuals into extreme poverty, worsening financial
          hardship. This is compounded by the country’s minimal healthcare
          budget allocation over the years (International Budget Partnership,
          2023).
        </p>
        <button>
          <Link href="about">Learn More &rarr;</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutComp;
