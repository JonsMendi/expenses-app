import React from "react";
import Card from "../UI/Card";
import "./ExpensesFilter.css";

// This component is the responsible to listen for a change of selected year.
// After selected a year. This data will be saved in selectedDateHandler function through onChange.
// Inside of selectedDateHandler function we will save the selected year in onSaveSelectedDate function that is defined on Expenses.js
// Like this, the year(value) will Lift the State Up to the parent component and there, the state will be defined

const ExpensesFilter = (props) => {
  const selectDateHandler = (event) => {
    props.onSaveSelectedDate(event.target.value);
  };

  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectDateHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
