import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";

const reducer = combineReducers({
  counter: counterSlice,
});
const store = configureStore({
  reducer,
});

export default store;
