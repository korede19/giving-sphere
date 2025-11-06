import EmergencyResponse from "@/components/emergencySupport";
import Footer from "@/components/footer";
import HealthEquityOutreach from "@/components/healthOutreach";
import MakeADifference from "@/components/makeDifference";
import MedicalSupport from "@/components/medicalSupport";
import MegaHeader from "@/components/megaHeader";
import OurSolution from "@/components/ourSolution";
import WorkBanner from "@/components/workBanner";
import ImpactQuote from "@/components/workTackle";
import React from "react";

const OurWork = () => {
  return (
    <div>
      <MegaHeader />
      <WorkBanner />
      <ImpactQuote />
      <MakeADifference />
      <OurSolution />
      <EmergencyResponse />
      <MedicalSupport />
      <HealthEquityOutreach />
      <Footer />
    </div>
  );
};

export default OurWork;
