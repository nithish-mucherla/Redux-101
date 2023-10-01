import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expenseSlice";
import { incomeSlice } from "./income/incomeSlice";
import { loggerMiddleware } from "middleware/loggerMiddleware";

const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    INCOME: incomeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(loggerMiddleware.middleware),
});

export { store };
