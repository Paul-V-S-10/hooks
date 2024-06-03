import React, { useState, useCallback } from 'react';

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const handleClick = useCallback(() => {
    // Perform some operation using count and items
    console.log('Count:', count, 'Items:', items);
  }, [count, items]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setItems([...items, 'new item'])}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};
export default CallBack