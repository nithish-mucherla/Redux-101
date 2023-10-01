import { addExpenseAction } from "store/expense/expenseSlice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function ExpenseInput(props) {
  const [expense, setExpense] = useState("");
  const [expenseName, setExpenseName] = useState("");

  // use dispatch to call actions provided by the state reducer (data slice that we created)
  /**
   *
   * Redux works more like event system.
   * Our reducer keeps listening to action events and answers accordingly by calling that action method.
   * Dispatch is used to dispatch the action event so that reducer can call the action accordingly.
   */
  const dispatch = useDispatch();
  const submitExpense = (e) => {
    e.preventDefault();
    dispatch(
      addExpenseAction({
        expense: parseFloat(expense),
        name: expenseName,
      })
    );
  };

  return (
    <form onSubmit={submitExpense}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
