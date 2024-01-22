import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import React from "react";
import BannerTeamOne from "./banner-team-one";
import TeamArea from "./team-area";

const TeamOne = () => {
  return (
    <>
      <BannerTeamOne />
      <TeamArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default TeamOne;
