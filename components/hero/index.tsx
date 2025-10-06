"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { HeroImages } from "@/utils/data";
import DonateCard from "../donateCard";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContain}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className={styles.backgroundSlider}
        >
          {HeroImages.map((image, index) => {
            return (
              <SwiperSlide key={image.id}>
                <div
                  className={styles.imageBackground}
                  style={{
                    backgroundImage: `url(${image.src})`,
                    height: "800px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                  key={index}
                >
                  <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                      <h1>Breaking poverty barriers, Restoring health</h1>
                      <p>
                        We are on a mission to break barriers of poverty by
                        facilitating equitable access to healthcare and reducing
                        out-of-pocket expenses for patients at risk in Nigeria.
                      </p>
                      <div className={styles.heroBtn}>
                        <button className={styles.btnOne}>Contact Us</button>
                        <button className={styles.btnTwo}>
                          Watch our story
                        </button>
                      </div>
                    </div>
                    <div className={styles.donateComponent}>
                      <DonateCard />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
