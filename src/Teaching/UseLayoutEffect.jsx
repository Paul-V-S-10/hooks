import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    useLayoutEffect(() => {
        console.log('Use Layout Effect');
    }, [])

    useEffect(() => {
        console.log('Use Effect  ');
    }, [])


    return (
        <div>UseLayoutEffect</div>
    )
}

export default UseLayoutEffect
