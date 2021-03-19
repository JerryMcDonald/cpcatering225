import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

// Core Components
// import stockCateringImage from "../../assets/img/stock/stockCateringImage.jfif"

function HeaderPresentation() {
  return (
    <>
      <div className="section section-hero section-shaped">
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("../../assets/img/stock/stockCateringImage.jpeg") + ")",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default HeaderPresentation;