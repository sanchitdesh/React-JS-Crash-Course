import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <p>Counter:{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
