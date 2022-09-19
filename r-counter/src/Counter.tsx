import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

    return (
      <div>
        <h2>My counter</h2>
        Count value is: {count}
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
  );
}

export default Counter;
