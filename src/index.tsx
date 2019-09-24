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
    chartType?: ChartType;
    values: Array<number>;
  }>;
  dataPoints?: { ["string"]: number };
  start?: Date;
  end?: Date;
};

type SelectEvent = {
  label: string;
  values: number[];
  index: number;
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
  onDataSelect?: (event: SelectEvent) => void;
};

export default function ReactFrappeChart(props: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const chart = React.useRef<any>(null);
  const { onDataSelect } = props;

  React.useEffect(() => {
    chart.current = new Chart(ref.current, {
      isNavigable: onDataSelect !== undefined,
      ...props
    });
    if (onDataSelect) {
      chart.current.parent.addEventListener(
        "data-select",
        (e: SelectEvent & React.SyntheticEvent) => {
          e.preventDefault();
          onDataSelect(e);
        }
      );
    }
  }, []);

  React.useEffect(() => {
    chart.current.update(props.data);
  }, [props.data]);

  return <div ref={ref} />;
}
