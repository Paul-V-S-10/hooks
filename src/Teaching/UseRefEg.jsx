import React, { useEffect, useRef, useState } from 'react'

const UseRefEg = () => {
    const ExpRef = useRef(null)
    const myDiv = useRef(null)

    const [stateName, setStateName] = useState('')

    const buttonHandle = () => {

        setStateName(ExpRef.current.value)

    }

    useEffect(() => {
        ExpRef.current.focus();
        console.log(myDiv);

    },[])
  return (
    <div ref={myDiv}>
        <input type="text" name="" id=""  ref={ExpRef}/>
        <button onClick={buttonHandle}>Click</button>
        <div>
            {
                stateName
            }
        </div>
    </div>
  )
}

export default UseRefEg