import React, { useReducer } from 'react';


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, name: "Paul V S" };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerEg() {
  const [state, dispatch] = useReducer(reducer, { count: 10, name: 'paul' });
  console.log(state.name);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default ReducerEg;
