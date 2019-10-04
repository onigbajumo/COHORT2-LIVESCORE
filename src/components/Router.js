import React, { Component } from "react";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Testing from "./Testing";

const Router = () => (
  <BrowserRouter>
    <div>
      <switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/testing" component={Testing} />
      </switch>
    </div>
  </BrowserRouter>
);
export default Router;
