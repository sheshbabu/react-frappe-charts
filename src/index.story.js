import React from "react";
import addDays from "date-fns/addDays";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";
import { storiesOf } from "@storybook/react";
import ReactFrappeChart from "./index";
import { action } from '@storybook/addon-actions';

const config = {
  colors: ["#21ba45", "#98d85b"],
  axisOptions: { xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 },
  height: 300
};
const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

storiesOf("Line", module)
  .add("Line", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeChart
        type="line"
        data={{
          labels: labels,
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
        }}
        {...config}
      />
    </div>
  ))
  .add("More Datasets", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeChart
        type="line"
        data={{
          labels: labels,
          datasets: [
            { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
            { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] }
          ]
        }}
        {...config}
      />
    </div>
  ))
  .add("Navigation Event", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeChart
        type="line"
        data={{
          labels: labels,
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
        }}
        onDataSelect={action('Point clicked')}
        {...config}
      />
    </div>
  ));

storiesOf("Bar", module)
  .add("Default", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeChart
        type="bar"
        data={{
          labels: labels,
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]
        }}
        {...config}
      />
    </div>
  ))
  .add("More Datasets", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeChart
        type="bar"
        data={{
          labels: labels,
          datasets: [
            { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
            { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] }
          ]
        }}
        {...config}
      />
    </div>
  ));

storiesOf("Mixed Axis", module).add("Default", () => (
  <div style={{ width: "500px" }}>
    <ReactFrappeChart
      type="axis-mixed"
      data={{
        labels: labels,
        datasets: [
          {
            name: "Dataset 1",
            values: [18, 40, 30, 35, 8, 52, 17, -4],
            chartType: "bar"
          },
          {
            name: "Dataset 2",
            values: [30, 50, -10, 15, 18, 32, 27, 14],
            chartType: "line"
          }
        ]
      }}
      {...config}
    />
  </div>
));

storiesOf("Pie", module).add("Default", () => (
  <div style={{ width: "500px" }}>
    <ReactFrappeChart
      type="pie"
      data={{
        labels: labels,
        datasets: [
          {
            name: "Dataset 1",
            values: [18, 40, 30, 35, 8, 52, 17, -4],
            chartType: "bar"
          },
          {
            name: "Dataset 2",
            values: [30, 50, -10, 15, 18, 32, 27, 14],
            chartType: "line"
          }
        ]
      }}
      {...config}
    />
  </div>
));

storiesOf("Percentage", module).add("Default", () => (
  <div style={{ width: "500px" }}>
    <ReactFrappeChart
      type="percentage"
      data={{
        labels: labels,
        datasets: [
          {
            name: "Dataset 1",
            values: [18, 40, 30, 35, 8, 52, 17, -4],
            chartType: "bar"
          },
          {
            name: "Dataset 2",
            values: [30, 50, -10, 15, 18, 32, 27, 14],
            chartType: "line"
          }
        ]
      }}
      {...config}
    />
  </div>
));

const startDate = new Date("2018-09-01");
const endDate = new Date("2018-12-31");

function getHeatMapData() {
  let dataPoints = {};
  let currDate = startDate;
  while (isBefore(currDate, endDate) || isEqual(currDate, endDate)) {
    const count = pickRandomNumber(10, 1000);
    dataPoints[currDate.getTime() / 1000] = count;
    currDate = addDays(currDate, 1);
  }
  return dataPoints;
}

function pickRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

storiesOf("Heatmap", module).add("Default", () => (
  <ReactFrappeChart
    type="heatmap"
    data={{
      dataPoints: getHeatMapData(),
      start: startDate,
      end: endDate
    }}
    {...config}
  />
));
