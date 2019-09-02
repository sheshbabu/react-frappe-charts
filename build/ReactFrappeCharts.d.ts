/// <reference types="react" />
declare type Props = {
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
export default function ReactFrappeCharts(props: Props): JSX.Element;
export {};
