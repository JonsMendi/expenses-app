import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  // Under is where the year(value) selected in ExpensesFilter.js will be saved and the set in the state.
  // This happen putting the value of selectedDateHandler function in ExpensesFilter.js in setFilteredYear.
  const savedSelectedDate = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveSelectedDate={savedSelectedDate}
      />
      <ExpenseItem
        //Parent-Child-Props
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        //Parent-Child-Props
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        //Parent-Child-Props
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        //Parent-Child-Props
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
