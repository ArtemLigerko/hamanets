// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import transactionsSlice from "./transactions";
import userSlice from "./user";

export const rootReducer = combineReducers({
  transactions: transactionsSlice,
  user: userSlice,
});
