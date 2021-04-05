import React from "react";

import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar.js";

import LandingPageHeader from "../components/Headers/LandingPageHeader.js";


function AboutPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ScrollTransparentNavbar />
      {/* <LandingPageHeader /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div 
      className="wrapper" type="primary">
        <p>This is the About page</p>
      </div>
    </>
  );
}

export default AboutPage;