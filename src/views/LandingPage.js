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
      <ScrollTransparentNavbar />
      <LandingPageHeader />
      <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  
                </h5>
              </Col>
            </Row>
            <div className="separator separator-info"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/stock/stockCateringImage.jpeg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                    <br></br>
                      <br></br>
                      <small>-CPCatering</small>
                    </p>
                  </div>
                  <div
                    className="image-container image-left-bottom"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/stock/stockCateringImage.jpeg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/stock/stockCateringImage.jpeg") + ")",
                    }}
                  ></div>
                  <h3>
                
                  </h3>
                  <p>
     
                  </p>
                  <p>

                  </p>
                  <p>

                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      <div className="wrapper" type="primary">
        <p>Hello</p>
      </div>
    </>
  );
}

export default LandingPage;