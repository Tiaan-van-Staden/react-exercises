import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  const countColor = count >= 0 ? 'green' : 'red';

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <span className={`count ${countColor}`}>{count}</span>
        </div>
        <div className="buttons">
          <button className="button" onClick={incrementCount}>+</button>
          <button className="button" onClick={decrementCount}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

