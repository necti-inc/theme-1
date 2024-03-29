import Counter from "@/common/counter";
import React from "react";
import AboutArea from "./about-area";
import Banner from "./banner";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import Team from "@/common/team";
import FooterFour from "@/layout/footer/footer-4";

const About = () => {
  return (
    <>
      <Banner />
      <AboutArea />
      <Counter />
      <Specialists />
      <NavTab />
      <Team />
    </>
  );
};

export default About;
