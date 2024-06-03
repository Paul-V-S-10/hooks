import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [data, setData] = useState([]);
  const [price,setPrice] = useState(0)

  const filteredData = useMemo(() => {
    // Perform some filtering or processing on data
    return data.filter((item) => item.price > 10);
  }, [data]);

  return (
    <div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
      <button onClick={() => setData([...data, { id: 3, name: 'New Item', price: price }])}>
        Add Item
      </button>
    </div>
  );
};
export default Memo