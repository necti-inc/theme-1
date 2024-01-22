import PricingArea from "@/common/pricing-area";
import Specialists from "@/common/specialists";
import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";

const ServiceOne = () => {
  return (
    <>
      <Banner />
      <ServiceArea />
      <Specialists />
      <PricingArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceOne;
