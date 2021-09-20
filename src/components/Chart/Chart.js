import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <div classNam="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.lable}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
        />;
      })}
    </div>
  );
};

export default Chart;