import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter.js";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h2>This count from App is : {count}</h2>
      <Counter />
    </div>
  );
};

export default App;
