import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
const { default: singleSpaReact } = require("single-spa-react");

window.secondReact = singleSpaReact({
  React: React,
  ReactDOM: ReactDOM,
  rootComponent: Root,
});
