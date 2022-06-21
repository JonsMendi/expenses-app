import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpense = (newEnteredExpense) => {
    const expenseData = {
      ...newEnteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm
        //Child-Parents-Props
        onSaveNewExpense={saveNewExpense}
      />
    </Card>
  );
};

export default NewExpense;
