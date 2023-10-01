import { updateIncome } from "store/income/incomeSlice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const updateIncomeHandler = (e) => {
    dispatch(updateIncome(Number.parseFloat(e.target.value)));
  };
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          className="form-control"
          onChange={updateIncomeHandler}
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
