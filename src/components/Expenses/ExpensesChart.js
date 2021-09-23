import React, { useState, useEffect } from "react";
import Chart from "../Chart/Chart";
import "./ExpensesChart.css";

const ExpensesChart = (props) => {
  const [trimestral, setTrimestral] = useState(false);
  const [chartDataPoints, setChartDataPoints] = useState([]);
  useEffect(() => {
    let tempChartDataPoints = [];
    if (!trimestral) {
      tempChartDataPoints = [
        { label: "Ene", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Abr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Ago", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dic", value: 0 },
      ];
      for (const expense of props.expenses) {
        const expenseMonth = new Date(expense.date).getMonth(); //obtengo el mes
        tempChartDataPoints[expenseMonth].value += expense.amount;
      }
    } else {
      tempChartDataPoints = [
        { label: "Primer", value: 0 },
        { label: "Segundo", value: 0 },
        { label: "Tercero", value: 0 },
        { label: "Cuarto", value: 0 },
      ];
      for (const expense of props.expenses) {
        const expenseMonth = new Date(expense.date).getMonth(); //obtengo el mes
        tempChartDataPoints[Math.trunc(expenseMonth / 3)].value +=
          expense.amount;
      }
    }
    setChartDataPoints(tempChartDataPoints);
  }, [trimestral, props.expenses]);

  const changeFilter = (e) => {
    e.preventDefault();
    setTrimestral((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="expenses-chart">
      <Chart dataPoints={chartDataPoints} />
      <button onClick={changeFilter}>
        {trimestral ? "Trimestral" : "Anual"}
      </button>
    </div>
  );
};

ExpensesChart.defaultProps = {
  trimestral: false,
};

export default ExpensesChart;
