import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString("es-AR", { month: "long" });
  const day = new Date(props.date).toLocaleString("es-AR", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();
  return (
    <div className="expense-date">
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
