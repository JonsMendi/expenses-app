import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // Under just a cleaner way to define an display the condition for the expenses items.
  // in this case we just need to use {expensesCounter} in the return and the code is cleaner.
  if (props.items.length === 0)
    return <h3 className="expenses-list__fallback">There is no expenses!</h3>;

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
