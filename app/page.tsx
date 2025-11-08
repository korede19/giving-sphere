import React from "react";
import styles from "./styles.module.css";
import HeroSection from "@/components/hero";
import AboutComp from "@/components/aboutUs";
import ScrollCounter from "@/components/counter";
import Footer from "@/components/footer";
import TeamSlider from "@/components/teams";
import MegaHeader from "@/components/megaHeader";
import Testimonial from "@/components/testimonials";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <MegaHeader />
      <HeroSection />
      <ScrollCounter />
      <AboutComp />
      <Testimonial />
      <TeamSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
