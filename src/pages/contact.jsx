import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Layout from "@/layout/layout";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"contact us"} />
        <Layout>
            <ContactUs />
        </Layout>
    </Wrapper>
  );
};

export default index;
