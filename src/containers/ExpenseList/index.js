import { List } from "components/List/List";
import { useSelector } from "react-redux";

export default function ExpenseList() {
  // use useSelector to fetch data from the reduxStore
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  return expenseList.length > 0 ? <List items={expenseList} /> : <></>;
}
