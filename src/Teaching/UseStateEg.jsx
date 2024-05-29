import React, { useState } from 'react'

const UseStateEg = () => {
    const [input,setInput] = useState('')
    return(
        <div>
            <input onChange={(e)=>{setInput(e.target.value)}} type="text" />
            
            {input}
        </div>
    )
}

export default UseStateEg