import About from "@/components/about/about";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Layout from "@/layout/layout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About" />
        <Layout>
            <About />
        </Layout>
    </Wrapper>
  );
};

export default index;
