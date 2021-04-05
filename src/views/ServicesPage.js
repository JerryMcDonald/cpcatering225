import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar.js";

import LandingPageHeader from "../components/Headers/LandingPageHeader.js";


function ServicesPage() {
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
                  {/* // change the services page header */}

      {/* <LandingPageHeader /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="wrapper" type="primary">
        <p>This is the services page</p>
      </div>
    </>
  );
}

export default ServicesPage;