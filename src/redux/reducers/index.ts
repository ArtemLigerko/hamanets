// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./user";

export const rootReducer = combineReducers({
  user: userSlice,
});
