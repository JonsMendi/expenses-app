import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesArray = [
  {
    id: "e1",
    title: "Chocolate with peanuts",
    amount: 14.12,
    date: new Date(2022, 7, 11),
  },
  {
    id: "e2",
    title: "Lobster for Breakfast",
    amount: 999.49,
    date: new Date(2022, 2, 11),
  },
  {
    id: "e3",
    title: "Chair out of Paper",
    amount: 594.67,
    date: new Date(2021, 4, 11),
  },
  {
    id: "e4",
    title: "Soccer ball",
    amount: 50,
    date: new Date(2020, 2, 1),
  },
];

const App = () => {
  const [addExpense, setAddExpense] = useState(expensesArray);

  const addExpenseHandler = (expense) => {
    // Because it's not correct/doesn't work to add a new state in a previous state directly
    // We need to return this new state in a function, where we can accept the previous state
    setAddExpense((previousState) => {
      return [expense, ...previousState];
    });
  };

  return (
    <div>
      <NewExpense
        //Child-Parent-Props
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        //Parent-Child-Props
        expenses={addExpense}
      />
    </div>
  );
};

export default App;
