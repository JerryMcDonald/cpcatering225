import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/scss/now-ui-kit.scss?v=1.4.0";
import "../src/assets/demo/demo.css?v=1.4.0";
import "../src/assets/demo/react-demo.css?v=1.4.0";
import "../src/assets/demo/nucleo-icons-page-styles.css?v=1.4.0";


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