# React Frappe Charts

React wrapper for [Frappe Charts](https://frappe.io/charts) with TypeScript definitions and Storybook playground

[![Bundlephobia](https://flat.badgen.net/bundlephobia/minzip/react-frappe-charts@1.0.1)](https://bundlephobia.com/result?p=react-frappe-charts) [![Bundlephobia](https://flat.badgen.net/bundlephobia/min/react-frappe-charts@1.0.1)](https://bundlephobia.com/result?p=react-frappe-charts)

## Installation

**React Frappe Charts requires React 16.8.0 or later.**

```shell
$ npm install --save react-frappe-charts
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
        datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
      }}
      returnReference={ ref => {/* do something with the chart's React DOM reference, i.e. save to some variable, so later can do <variable>.export() to export the cart */} }
    />
  );
}
```

Updating the `data` prop would update the chart with new data.

## Playground

Use [Storybook Playground](https://react-frappe-charts.netlify.com/?path=/story/playground--default) to tweak different props and see their effect on the chart rendered

## Contributing

PRs are welcome!
