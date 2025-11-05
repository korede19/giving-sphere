"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./styles.module.css";
import { HeroImages } from "@/utils/data";
import Link from "next/link";
import DonateCard from "../donateCard";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      {/* 🔹 Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="flip"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        allowTouchMove={false}
        className={styles.backgroundSlider}
      >
        {HeroImages.map((image, index) => (
          <SwiperSlide key={image.id || index}>
            <div
              className={styles.imageBackground}
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Text + Donate Overlay */}
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Breaking poverty barriers, restoring health</h1>
            <p>
              We are on a mission to break barriers of poverty by facilitating
              equitable access to healthcare and reducing out-of-pocket expenses
              for patients at risk in Nigeria.
            </p>
            <div className={styles.heroBtn}>
              <button className={styles.btnOne}>
                <Link href="/get-involved">Get Involved &rarr;</Link>
              </button>
              <button className={styles.btnTwo}>Watch our story</button>
            </div>
          </div>

          <div className={styles.donateComponent}>
            <DonateCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
