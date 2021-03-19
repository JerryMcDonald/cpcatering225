import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import MainNavbar from "../components/navbar/MainNavbar.js";
import HeaderPresentation from "../components/header/HeaderPresentation.js";


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
      <HeaderPresentation />
      <div className="wrapper" type="primary">
        <p>Hello</p>
      </div>
    </>
  );
}

export default LandingPage;