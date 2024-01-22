import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import React from "react";
import Banner from "./banner";
import TeamDetailsArea from "./team-details-area";

const TeamDetails = () => {
  return (
    <>
      <Banner />
      <TeamDetailsArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default TeamDetails;
