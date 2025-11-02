import AboutHero from "@/components/aboutHero";
import AboutSection from "@/components/aboutSection";
import Footer from "@/components/footer";
import MegaHeader from "@/components/megaHeader";
import OurSolution from "@/components/ourSolution";
import OurStory from "@/components/ourStory";
import TeamSlider from "@/components/teams";
import OurValues from "@/components/values";
import React from "react";

const About = () => {
  return (
    <div>
      <MegaHeader />
      <AboutHero />
      <AboutSection />
      <OurSolution />
      <OurStory />
      <OurValues />
      <TeamSlider />
      <Footer />
    </div>
  );
};

export default About;
