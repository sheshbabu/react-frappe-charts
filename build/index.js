import React, { useImperativeHandle, forwardRef } from "react";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
const ReactFrappeChart = forwardRef((props, parentRef) => {
    const ref = React.useRef(null);
    const chart = React.useRef(null);
    const initialRender = React.useRef(true);
    const { onDataSelect } = props;
    useImperativeHandle(parentRef, () => ({
        export: () => {
            if (chart && chart.current) {
                chart.current.export();
            }
        },
    }));
    React.useEffect(() => {
        chart.current = new Chart(ref.current, Object.assign({ isNavigable: onDataSelect !== undefined }, props));
        if (onDataSelect) {
            chart.current.parent.addEventListener("data-select", (e) => {
                e.preventDefault();
                onDataSelect(e);
            });
        }
    }, []);
    React.useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        chart.current.update(props.data);
    }, [props.data]);
    return React.createElement("div", { ref: ref });
});
export default ReactFrappeChart;
