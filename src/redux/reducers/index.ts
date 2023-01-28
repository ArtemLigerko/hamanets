// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import transactionsSlice from "./transactions";
import walletsSlice from "./wallets";

export const rootReducer = combineReducers({
  transactions: transactionsSlice,
  wallets: walletsSlice,
});
