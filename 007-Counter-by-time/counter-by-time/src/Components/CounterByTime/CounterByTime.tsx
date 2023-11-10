import { useState, useEffect } from "react";

const CounterByTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Here use the prevCount instead of Count because count is not updated yet here after the first update.
      // don't use: (try and you'll see) setCount((count) => count + 1);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default CounterByTime;
