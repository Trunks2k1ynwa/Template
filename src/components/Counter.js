import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { decrement, increment } from "../redux-toolkit/counterSlice.js";

const Counter = () => {
  // useSelector = createStore; state = reducer
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // = counterReducer(increment())
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h2>This count is : {count}</h2>
      <Button onClick={handleIncrement} variant="contained">
        Increment
      </Button>
      <Button onClick={handleDecrement} variant="contained">
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
