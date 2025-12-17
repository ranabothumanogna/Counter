import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
