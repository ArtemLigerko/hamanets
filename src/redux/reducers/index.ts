// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import transactionsSlice from "./transactions";
import userSlice from "./user";
import walletsSlise from "./wallets";

export const rootReducer = combineReducers({
  user: userSlice,
  transactions: transactionsSlice,
  wallets: walletsSlise,
});
