import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
    };
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense
        //Child-Parent-Props
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        //Parent-Child-Props
        expenses={expenses}
      />
    </div>
  );
};

export default App;
