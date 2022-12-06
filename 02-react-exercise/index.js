import React from "react";
import ReactDOM from "react-dom";
import { registerApplication, start } from "single-spa";
import singleSpaReact from "single-spa-react";
import Root from "./Root";

const app = singleSpaReact({
  React: React,
  ReactDOM: ReactDOM,
  rootComponent: Root,
  domElementGetter: () => {
    return document.getElementById("02-react-exercise");
  },
});

registerApplication({
  name: "react-app",
  app,
  activeWhen: ["/"],
});

start();
