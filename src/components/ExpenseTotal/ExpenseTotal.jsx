import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal() {
  const totalExpenseValue = useSelector(
    (store) => store.EXPENSE.expenseList
  ).reduce(
    (totalExpense, currentExpense) => totalExpense + currentExpense.expense,
    0
  );
  const income = useSelector((store) => store.INCOME.income);

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenseValue} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{income - totalExpenseValue} $</div>
      </div>
    </div>
  );
}
