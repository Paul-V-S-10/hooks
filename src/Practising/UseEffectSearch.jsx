import React, { useEffect, useState } from 'react'

const UseEffectSearch = () => {
    const [input,setInput] = useState('')
    useEffect(
        ()=>{
            console.log('Searching...');
        },[input]
    )
  return (
    <div>
        <input onChange={(e) => {setInput(e.target.value)}}  type="text" />
    </div>
  )
}

export default UseEffectSearch
