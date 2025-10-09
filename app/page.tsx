import React from "react";
import styles from "./styles.module.css";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import AboutComp from "@/components/aboutUs";
import ScrollCounter from "@/components/counter";
import OurValues from "@/components/values";
import Footer from "@/components/footer";
import NewsletterCTA from "@/components/newsletter";
import TeamSlider from "@/components/teams";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
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
