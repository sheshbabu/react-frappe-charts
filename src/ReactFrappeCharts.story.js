import React from "react";
import { storiesOf } from "@storybook/react";
import ReactFrappeCharts from "./ReactFrappeCharts";

storiesOf("Bar", module)
  .add("Default", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeCharts
        type="bar"
        colors={["red"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={300}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]
        }}
      />
    </div>
  ))
  .add("More Datasets", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeCharts
        type="bar"
        colors={["red"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={300}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
            { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] }
          ]
        }}
      />
    </div>
  ));

storiesOf("Line", module)
  .add("Line", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeCharts
        type="line"
        colors={["#21ba45"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={300}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
        }}
      />
    </div>
  ))
  .add("More Datasets", () => (
    <div style={{ width: "500px" }}>
      <ReactFrappeCharts
        type="line"
        colors={["#21ba45"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={300}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
            { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] }
          ]
        }}
      />
    </div>
  ));
