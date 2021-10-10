import React from "react";
declare type ChartType = "line" | "bar" | "axis-mixed" | "pie" | "percentage" | "heatmap";
declare type AxisMode = "span" | "tick";
declare type ChartData = {
    labels?: Array<string>;
    datasets?: Array<{
        name?: string;
        chartType?: ChartType;
        values: Array<number>;
    }>;
    dataPoints?: {
        [x: string]: number;
    };
    start?: Date;
    end?: Date;
};
declare type SelectEvent = {
    label: string;
    values: number[];
    index: number;
};
declare type Props = {
    title?: string;
    type?: ChartType;
    data: ChartData;
    height?: number;
    colors?: Array<string>;
    axisOptions?: {
        xAxisMode?: AxisMode;
        yAxisMode?: AxisMode;
        xIsSeries?: 0 | 1;
    };
    barOptions?: {
        spaceRatio?: number;
        stacked?: 0 | 1;
        height?: number;
        depth?: number;
    };
    lineOptions?: {
        dotSize?: number;
        hideLine?: 0 | 1;
        hideDots?: 0 | 1;
        heatline?: 0 | 1;
        regionFill?: number;
        areaFill?: number;
        spline?: 0 | 1;
    };
    isNavigable?: boolean;
    maxSlices?: number;
    onDataSelect?: (event: SelectEvent) => void;
};
declare const ReactFrappeChart: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default ReactFrappeChart;
