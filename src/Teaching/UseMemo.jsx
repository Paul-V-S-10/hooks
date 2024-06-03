import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
     // State to manage an input value
  const [inputValue, setInputValue] = useState('');

  // Expensive computation function
  const computeExpensiveValue = (input) => {
    console.log('Computing expensive value...');
    // Simulating a time-consuming computation
    for (let i = 0; i < 1000000000; i++) {}
    return `Result: ${input}`;
  };

  // Memoized result using useMemo
  const memoizedValue = useMemo(() => computeExpensiveValue(inputValue), [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{memoizedValue}</p>
    </div>
  );
}

export default UseMemoHook