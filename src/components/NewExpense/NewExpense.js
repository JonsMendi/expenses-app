import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpenses, setAddExpenses] = useState(false);
  //Under to show the ExpensesForm on click.
  const handleChange = () => {
    return setAddExpenses(true);
  };
  //Under cancel the ExpensesForm on click.
  const handleChangeCancel = () => {
    return setAddExpenses(false);
  };

  const saveNewExpense = (newEnteredExpense) => {
    const expenseData = {
      ...newEnteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      {!addExpenses && <button onClick={handleChange}>Add New Expense</button>}
      {addExpenses && (
        <ExpenseForm
          //Child-Parents-Props
          onSaveNewExpense={saveNewExpense}
          onCancelEvent={handleChangeCancel}
        />
      )}
    </Card>
  );
};

export default NewExpense;
