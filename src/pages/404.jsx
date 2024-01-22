import FooterFour from "@/layout/footer/footer-4";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="error_page">
          <Link href="/">
            <img style={{ width: "100%" }} src="/assets/img/404.webp"></img>
          </Link>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default Error;
