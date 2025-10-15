import React from "react";
import styles from "./styles.module.css";
import HeroSection from "@/components/hero";
import AboutComp from "@/components/aboutUs";
import ScrollCounter from "@/components/counter";
import OurValues from "@/components/values";
import Footer from "@/components/footer";
import NewsletterCTA from "@/components/newsletter";
import TeamSlider from "@/components/teams";
import MegaHeader from "@/components/megaHeader";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <MegaHeader />
      <HeroSection />
      <ScrollCounter />
      <AboutComp />
      <OurValues />
      <TeamSlider />
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
