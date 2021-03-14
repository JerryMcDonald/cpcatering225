import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import MainNavbar from "../components/navbar/MainNavbar.js";

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
      <MainNavbar />
      <div className="wrapper">
        <p>Hello</p>
      </div>
    </>
  );
}

export default LandingPage;