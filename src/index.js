import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/scss/now-ui-kit.scss?v=1.4.0";
import "../src/assets/demo/demo.css?v=1.4.0";
import "../src/assets/demo/react-demo.css?v=1.4.0";
import "../src/assets/demo/nucleo-icons-page-styles.css?v=1.4.0";


import LandingPage from "../src/views/LandingPage.js";
import AboutPage from"../src/views/AboutPage.js";
import Services from "../src/views/ServicesPage.js";
import MenuPage from "../src/views/MenuPage.js";
import ContactPage from "../src/views/ContactPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <LandingPage {...props} />} />
      <Route path="/services" exact render={(props) => <Services {...props} />} />
      <Route path="/menu" exact render={(props) => <MenuPage {...props} />} />
      <Route path="/about" exact render={(props) => <AboutPage {...props} />} />
      <Route path="/contact" exact render={(props) => <ContactPage {...props} />} />



      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);