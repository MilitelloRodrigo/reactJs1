import React from "react";
import useBrowserState from "./customHook/useBrowserState";
import "./App.css";
import Exprenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const expensesMock = [
//   {
//     id: "e1",
//     title: "Papel Higienico",
//     amount: 4.28,
//     date: new Date(2021, 2, 1),
//   },
//   {
//     id: "e2",
//     title: "Nueva Television",
//     amount: 124.48,
//     date: new Date(2021, 2, 12),
//   },
//   {
//     id: "e3",
//     title: "nuevo escritorio",
//     amount: 139.18,
//     date: new Date(2021, 2, 11),
//   },
//   {
//     id: "e4",
//     title: "Seguro del auto",
//     amount: 294.68,
//     date: new Date(2021, 2, 21),
//   },
// ];

function App() {
  //const [expenses, setExpenses] = useState([...expensesMock]);
  const [expenses, setExpenses] = useBrowserState([], "gastos");

  const addExpenseHandler = (expense) => {
    setExpenses((prevEstate) => {
      return [expense, ...prevEstate];
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
