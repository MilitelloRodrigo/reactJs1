import React, { useState } from "react";
import "./App.css";
import Exprenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expensesMock = [
    { title: "Toile paper", amount: 4.28, date: new Date(2021, 2, 1) },
    { title: "New Tv", amount: 124.48, date: new Date(2021, 2, 12) },
    { title: "New desktop", amount: 139.18, date: new Date(2021, 2, 11) },
    { title: "Car insurance", amount: 294.68, date: new Date(2021, 2, 21) },
  ];
  const [expenses, setExpenses] = useState([...expensesMock]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevEstate) => {
      return [...prevEstate, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Exprenses items={expenses} />
    </div>
  );
}

export default App;
