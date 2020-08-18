# React Frappe Charts

React wrapper for [Frappe Charts](https://frappe.io/charts) with TypeScript definitions and Storybook playground

<p align="center"><img src="https://raw.githubusercontent.com/sheshbabu/react-frappe-charts/master/banner.png" /></p>

[![Bundlephobia](https://flat.badgen.net/bundlephobia/minzip/react-frappe-charts@4.0.0)](https://bundlephobia.com/result?p=react-frappe-charts) [![Bundlephobia](https://flat.badgen.net/bundlephobia/min/react-frappe-charts@4.0.0)](https://bundlephobia.com/result?p=react-frappe-charts) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://react-frappe-charts.netlify.app)

## Installation

**React Frappe Charts requires React 16.8.0 or later.**

```shell
$ npm install --save frappe-charts react-frappe-charts
```

## Usage

```ts
import ReactFrappeChart from "react-frappe-charts";

export default function MyChart(props) {
  return (
    <ReactFrappeChart
      type="bar"
      colors={["#21ba45"]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
      height={250}
      data={{
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
      }}
    />
  );
}
```

Updating the `data` prop would update the chart with new data.

### With Next.js

The underlying `frappe-charts` library should be transpiled to avoid module loading issues. Install [next-transpile-modules](https://github.com/martpie/next-transpile-modules) with your package manager and then use the following code snippet:

```js
/* next.config.js */
const withTM = require("next-transpile-modules")(["frappe-charts"]);
module.exports = withTM({
  /* Optionally, specify additional settings here */
});
```

## Export Chart

In order to export a chart we need to forward a ref to invoke the `chart.export()` feature from Frappe Charts.

Example:

```ts
import React, { useRef } from "react";
import ReactFrappeChart from "react-frappe-charts";

export default function MyChart(props) {
  const chartRef = useRef();

  const exportChart = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.export();
    }
  };

  return (
    <div>
      <ReactFrappeChart
        ref={chartRef}
        type="bar"
        colors={["#21ba45"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={250}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
        }}
      />
      <button onClick={exportChart} type="button">
        Export
      </button>
    </div>
  );
}
```

## Playground

Use [Storybook Playground](https://react-frappe-charts.netlify.com/?path=/story/playground--default) to tweak different props and see their effect on the chart rendered

## Contributing

PRs are welcome!
