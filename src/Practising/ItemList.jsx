import React, { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((item) => item.id !== action.payload);
    case 'clear':
      return [];
    default:
      return state;
  }
}

function ItemList() {
  const [items, dispatch] = useReducer(reducer, initialState);

  const addItem = (text) => {
    dispatch({ type: 'add', payload: { id: Date.now(), text } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'remove', payload: id });
  };

  const clearItems = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem('New Item')}>Add Item</button>
      <button onClick={clearItems}>Clear Items</button>
    </div>
  );
}

export default ItemList;
