import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import React from "react";
import Banner from "./banner";
import ServiceDetailsArea from "./service-details-area";

const ServiceDetails = () => {
  return (
    <>
      <Banner />
      <ServiceDetailsArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceDetails;
