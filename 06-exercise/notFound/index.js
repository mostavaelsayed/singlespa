import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root";

window.notFound = singleSpaReact({
  React: React,
  ReactDOM: ReactDOM,
  rootComponent: Root,
});
