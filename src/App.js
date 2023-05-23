import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <h2 className="heading">Counter App</h2>
        <div className="count-body">
          <h1 className="value">{count}</h1>
          <div className="buttons">
            <button
              className="btn-inc btn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increment
            </button>
            <button
              className="btn-dec btn"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Decrement
            </button>
            <button
              className="btn-rest btn"
              onClick={() => {
                setCount(0);
              }}
            >
              Rest
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
