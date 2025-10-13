import EmergencyResponse from "@/components/emergencySupport";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HealthEquityOutreach from "@/components/healthOutreach";
import MedicalSupport from "@/components/medicalSupport";
import WorkBanner from "@/components/workBanner";
import React from "react";

const OurWork = () => {
  return (
    <div>
      <Header />
      <WorkBanner />
      <EmergencyResponse />
      <MedicalSupport />
      <HealthEquityOutreach />
      <Footer />
    </div>
  );
};

export default OurWork;
