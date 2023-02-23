import { createStore, combineReducers } from "redux";
import counterReducer from "../components/counter.js";

const reducer = combineReducers({
  // key : value
  counter: counterReducer,
});
const store = createStore(reducer);
export default store;
