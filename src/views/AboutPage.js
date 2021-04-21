import React from "react";

import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar.js";

import AboutPageHeader from "../components/Headers/AboutPageHeader.js";


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
      <AboutPageHeader />
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