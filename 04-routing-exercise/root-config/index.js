const { registerApplication, start } = require("single-spa");

registerApplication({
  name: "nav-bar-react-app",
  activeWhen: ["/"],
  app: window.navBar,
});

registerApplication({
  name: "first-react-app",
  activeWhen: ["/first"],
  app: window.firstReact,
});

registerApplication({
  name: "second-react-app",
  activeWhen: ["/second"],
  app: window.secondReact,
});

start();
