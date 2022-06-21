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

  // To create a filter through year selected we need to created a filter in the props that we receive from Expenses.js (props.expenses)
  // After, select the value that we want to filter (date) and then converted with built-in getFullYear and then toString
  // to be then possible compare with the value saved in filteredYear(selectedYear) that is a string.
  // After this, filterYearHandler function will be the one "mapped" and returning "ExpenseItem.js" component
  const filterYearHandler = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveSelectedDate={savedSelectedDate}
      />
      {filterYearHandler.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
