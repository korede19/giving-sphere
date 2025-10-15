import EmergencyResponse from "@/components/emergencySupport";
import Footer from "@/components/footer";
import HealthEquityOutreach from "@/components/healthOutreach";
import MedicalSupport from "@/components/medicalSupport";
import MegaHeader from "@/components/megaHeader";
import WorkBanner from "@/components/workBanner";
import React from "react";

const OurWork = () => {
  return (
    <div>
      <MegaHeader />
      <WorkBanner />
      <EmergencyResponse />
      <MedicalSupport />
      <HealthEquityOutreach />
      <Footer />
    </div>
  );
};

export default OurWork;
