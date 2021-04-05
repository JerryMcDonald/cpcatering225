import React from "react";

import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar.js";

import LandingPageHeader from "../components/Headers/LandingPageHeader.js";


function MenuPage() {
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
      {/* // change the menu page header */}
      {/* <LandingPageHeader /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="wrapper" type="primary">
        <p>This is the Menu page</p>
      </div>
    </>
  );
}

export default MenuPage;