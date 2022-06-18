import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // NOTE:
  // Instead of saving new inputs in different variables(as we define under), we could as well just save in one
  // creating a object inside f useState, like:
  // const [enteredInput, setEnteredInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  // Afterwords each function should have a different approach using 'prevState' as an argument
  // and returning each function with "return setTitle(...prevState, enteredTitle: event.target.value)"

  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeEvent = (event) => {
    setTitle(event.target.value);
    console.log(event);
  };

  const amountChangeEvent = (event) => {
    setAmount(event.target.value);
    console.log(event);
  };

  const dateChangeInput = (event) => {
    setDate(event.target.value);
    console.log(event);
  };

  const submitEvent = (event) => {
    //By default onSubmit handler 'reloads' the page.
    //To fix this, under we use a built-in functions that prevents it
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //here we use 'new Date' to parse the value into Date format.
    };

    console.log(expenseData);
  };

  return (
    // when trying to listen to a 'form' event SubmitEvent, by default, 'forms' listen through onSubmit instead of onClick event.
    <form onSubmit={submitEvent}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeEvent} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeEvent}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* Under, the min and max will be important to define a filter over the year expenses */}
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeInput}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
