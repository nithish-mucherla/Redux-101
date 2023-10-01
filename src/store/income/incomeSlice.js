import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState: {
    income: 0,
  },
  reducers: {
    updateIncome: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { updateIncome } = incomeSlice.actions;
