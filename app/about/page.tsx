import AboutHero from "@/components/aboutHero";
import AboutSection from "@/components/aboutSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OurSolution from "@/components/ourSolution";
import OurStory from "@/components/ourStory";
import TeamSlider from "@/components/teams";
import OurValues from "@/components/values";
import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutSection />
      <OurSolution />
      <OurValues />
      <OurStory />
      <TeamSlider />
      <Footer />
    </div>
  );
};

export default About;
