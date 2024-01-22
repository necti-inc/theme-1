import FooterFour from "@/layout/footer/footer-4";
import React from "react";
import DirectContactUs from "../forms/direct-contact-us";
import FaqArea from "./faq-area";
import FaqBanner from "./faq-banner";
import Layout from "@/layout/layout";

const FAQ = () => {
  return (
    <>
        <Layout>
          <FaqBanner />
          <FaqArea />
          <DirectContactUs />
        </Layout>
    </>
  );
};

export default FAQ;
