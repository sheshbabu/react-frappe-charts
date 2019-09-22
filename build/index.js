import React from "react";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
export default function ReactFrappeChart(props) {
    const ref = React.useRef(null);
    const chart = React.useRef(null);
    React.useEffect(() => {
        chart.current = new Chart(ref.current, Object.assign({}, props));
    }, []);
    React.useEffect(() => {
        chart.current.update(props.data);
    }, [props.data]);
    return React.createElement("div", { ref: ref });
}
