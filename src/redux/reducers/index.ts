// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import transactionsSlice from "./transactions";
import userSlice from "./user";
import walletsSlice from "./wallets";

export const rootReducer = combineReducers({
  user: userSlice,
  transactions: transactionsSlice,
  wallets: walletsSlice,
});
