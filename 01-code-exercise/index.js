import { registerApplication, start } from "single-spa";

let app = {
  async mount(props) {
    console.log(" application mounted!", props);
    var container = document.getElementById(
      "single-spa-application:vanilla-app-exercise"
    );
    var image = document.createElement("img");
    image.src =
      "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg";

    container.appendChild(image);
  },
  async unmount(props) {
    console.log(" application unmounted!", props);
    var container = document.getElementById(
      "single-spa-application:vanilla-app-exercise"
    );
    container.innerHTML = "";
  },
};

registerApplication({
  name: "01 code-exercise folder",
  app,
  activeWhen: ["/"],
});

start();
