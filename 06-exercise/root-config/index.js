import { registerApplication, start } from "single-spa";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import layout from "./layout.html";

const routes = constructRoutes(layout);

const  applications = constructApplications({
  routes,
  async loadApp({ name }) {
    debugger;
    if (window[name]) return window[name];
    throw Error(`please make sure that you are loaded window ${name}`);
  },
});

constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start();
