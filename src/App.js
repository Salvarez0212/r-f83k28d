import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prevState) => (prevState += 1));
  };

  return (
    <div>
      <span className="value">{counter}</span>
      <button id="inc" onClick={handleIncrement}>
        Incrementa
      </button>
    </div>
  );
};

export default App;
