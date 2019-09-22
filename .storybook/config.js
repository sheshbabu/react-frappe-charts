import { configure, addDecorator, addParameters } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(centered);
addDecorator(withKnobs);

addParameters({
  options: {
    panelPosition: "right"
  }
});

function loadStories() {
  const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
