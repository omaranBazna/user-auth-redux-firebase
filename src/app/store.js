import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userSlice from "../features/userSlice";
export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
