import React from "react";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

type Props = {
  type: "line" | "bar" | "axis-mixed" | "pie" | "percentage" | "heatmap";
  data: {
    labels: Array<string>;
    datasets: Array<{
      values: Array<number>;
    }>;
  };
  colors: Array<string>;
  height: number;
  axisOptions: {
    xAxisMode: "span" | "tick";
    yAxisMode: "span" | "tick";
    xIsSeries: 0 | 1;
  };
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
