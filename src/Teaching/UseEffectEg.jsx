import React, { useEffect, useState } from 'react'

const UseEffectEg = () => {
    const [count,setCount] = useState(0) 
    useEffect(() => {
        console.log('hi');
    },[count])
  return (
    <div>
        <button onClick={() => {setCount(count+1)}}>Add</button>
        <div>Counter: {count}</div>
    </div>
  )
}

export default UseEffectEg