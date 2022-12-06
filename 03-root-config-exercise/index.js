import { registerApplication, start } from "single-spa";

var authenticated = true;
registerApplication({
  name: "react app",
  app: window.reactApp,
  activeWhen: ["/"],
  customProps: {
    authenticated,
  },
});

registerApplication({
  name: "react app2",
  app: window.reactApp2,
  activeWhen: ["/"],
  customProps: {
    authenticated:!authenticated,
  },
});

start();
