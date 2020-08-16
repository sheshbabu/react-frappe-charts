import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
import { number, text, array, select } from "@storybook/addon-knobs";
import ReactFrappeChart from "./index";

storiesOf("Playground", module).add("Default", () => {
  const chartRef = useRef();

  const exportChart = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.export();
    }
  }

  return (
    <div style={{ width: "500px" }}>
      <ReactFrappeChart
        ref={chartRef}
        key={Date.now()}
        title={text("Title", "Title")}
        type={select(
          "Type",
          ["line", "bar", "axis-mixed", "pie", "percentage"],
          "line"
        )}
        data={{
          labels: array("Labels", [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ]),
          datasets: [
            {
              name: "Dataset 1",
              chartType: select(
                "Dataset 1 Type",
                ["line", "bar", "axis-mixed", "pie", "percentage"],
                "line"
              ),
              values: array("Dataset 1 Values", [18, 40, 30, 35, 8, 52, 17, 4])
            },
            {
              name: "Dataset 2",
              chartType: select(
                "Dataset 2 Type",
                ["line", "bar", "axis-mixed", "pie", "percentage"],
                "line"
              ),
              values: array("Dataset 2 Values", [30, 50, 10, 15, 18, 32, 27, 14])
            }
          ]
        }}
        colors={[
          select(
            "Dataset 1 Color",
            [
              "light-blue",
              "blue",
              "violet",
              "red",
              "orange",
              "yellow",
              "green",
              "light-green",
              "purple",
              "magenta",
              "light-grey",
              "dark-grey"
            ],
            "light-green"
          ),
          select(
            "Dataset 2 Color",
            [
              "light-blue",
              "blue",
              "violet",
              "red",
              "orange",
              "yellow",
              "green",
              "light-green",
              "purple",
              "magenta",
              "light-grey",
              "dark-grey"
            ],
            "green"
          )
        ]}
        lineOptions={{
          dotSize: number("dotSize", 4),
          hideLine: select("hideLine", [0, 1], 0),
          hideDots: select("hideDots", [0, 1], 0),
          heatline: select("heatline", [0, 1], 0),
          regionFill: select("regionFill", [0, 1], 0),
          areaFill: select("areaFill", [0, 1], 0)
        }}
        axisOptions={{
          xAxisMode: select("xAxisMode", ["tick", "span"], "tick"),
          yAxisMode: select("yAxisMode", ["tick", "span"], "tick"),
          xIsSeries: select("xIsSeries", [0, 1], 1)
        }}
        barOptions={{
          spaceRatio: number("spaceRatio", 0),
          height: number("height", 20),
          depth: number("depth", 2),
          stacked: select("stacked", [0, 1], 0)
        }}
        maxSlices={number("maxSlices", 10)}
        height={number("Height", 300)}
      />
      <button onClick={exportChart} type="button">Export</button>
    </div>
  )
});
