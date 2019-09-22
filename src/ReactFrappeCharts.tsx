import React from "react";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

type ChartType =
  | "line"
  | "bar"
  | "axis-mixed"
  | "pie"
  | "percentage"
  | "heatmap";

type AxisMode = "span" | "tick";

type ChartData = {
  labels: Array<string>;
  datasets: Array<{
    name?: string;
    type?: ChartType;
    values: Array<number>;
  }>;
  dataPoints?: { ["string"]: number };
  start?: Date;
  end?: Date;
};

type Props = {
  title?: string;
  type?: ChartType;
  data: ChartData;
  height?: number;
  colors?: Array<string>;
  axisOptions?: {
    xAxisMode: AxisMode;
    yAxisMode: AxisMode;
    xIsSeries: 0 | 1;
  };
  barOptions?: {
    spaceRatio: number;
    stacked: 0 | 1;
    height: number;
    depth: number;
  };
  lineOptions?: {
    dotSize: number;
    hideLine: 0 | 1;
    hideDots: 0 | 1;
    heatline: 0 | 1;
    regionFill: number;
    areaFill: number;
  };
  isNavigable?: boolean;
  maxSlices?: number;
  addDataPoint: (
    label: string,
    valueFromEachDataset: Array<number>,
    index: number
  ) => void;
  removeDataPoint: (index: number) => void;
  update: (data: ChartData) => void;
};

export default function ReactFrappeCharts(props: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const chart = React.useRef<any>(null);

  React.useEffect(() => {
    chart.current = new Chart(ref.current, { ...props });
    chart.current.update(props.data);
  }, [props, props.data]);

  return <div ref={ref} />;
}
