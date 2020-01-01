import React from "react";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
export default function ReactFrappeChart(props) {
    const ref = React.useRef(null);
    const chart = React.useRef(null);
    const { onDataSelect, chartRef } = props;
    React.useEffect(() => {
        chart.current = new Chart(ref.current, Object.assign({ isNavigable: onDataSelect !== undefined }, props));
        if (onDataSelect) {
            chart.current.parent.addEventListener("data-select", (e) => {
                e.preventDefault();
                onDataSelect(e);
            });
        }
        if (chartRef) {
            chartRef(chart);
        }
    }, []);
    React.useEffect(() => {
        chart.current.update(props.data);
        if (chartRef) {
            chartRef(chart);
        }
    }, [props.data]);
    return React.createElement("div", { ref: ref });
}
