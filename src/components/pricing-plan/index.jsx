import PricingArea from "@/common/pricing-area";
import FooterFour from "@/layout/footer/footer-4";
import React from "react";
import DirectContactUs from "../forms/direct-contact-us";
import BannerPricing from "./banner-pricing";

const PricingPlan = () => {
  return (
    <>
      <BannerPricing />
      <PricingArea dark={false} />
      <PricingArea dark={true} />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default PricingPlan;
