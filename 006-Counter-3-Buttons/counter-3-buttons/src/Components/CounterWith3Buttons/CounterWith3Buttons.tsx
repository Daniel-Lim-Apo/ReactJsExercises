import { useState } from "react";

const CounterWith3Buttons = () => {
  // The state will be updated by the method 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count - 1)}> {"<<<  "} Decrement </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={() => setCount(count + 1)}> Increment {"  >>>"} </button>
    </div>
  );
};

export default CounterWith3Buttons;
