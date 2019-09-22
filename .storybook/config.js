import { configure, addDecorator, addParameters } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

addDecorator(centered);

addParameters({
  options: {
    showPanel: false,
    panelPosition: "right"
  }
});

function loadStories() {
  const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
