import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Our Story</h2>
        <p>
          It all started in 2018, when a modest ₦17,000 saved the life of
          18-month-old Ismail, who was battling rhabdomyosarcoma of the face and
          urgently needed a blood transfusion. His survival lit the fire that
          keeps us going and inspires us to do more.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/images/our-story.jpg"
          alt="Our Story"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default OurStory;
