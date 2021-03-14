import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-svg.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-design-system.scss?v1.0.0";

import LandingPage from "../src/views/LandingPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/test" exact render={(props) => <LandingPage {...props} />} />
      <Redirect to="/test" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);