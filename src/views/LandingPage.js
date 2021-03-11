import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Navbar from "components/navbars/DemoNavbar.js";

function LandingPage() {
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
      <Navbar />
      <div className="wrapper">
      </div>
    </>
  );
}

export default LandingPage;