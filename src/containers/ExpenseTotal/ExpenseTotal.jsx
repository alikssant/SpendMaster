import s from "./style.module.css";
import { useSelector } from "react-redux";

export function ExpenseTotal(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpense = expenseList.reduce((acc, expense) => {
    return Number.parseFloat(acc) + Number.parseFloat(expense.price);
  }, 0);

  const remainingMoney = income - totalExpense;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total Expenses:</div>
        <div className={`col ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining:</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
