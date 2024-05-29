import React, { useEffect, useId } from 'react'

const UseIdEg = () => {
  const id = useId();
  console.log(id);

  return (
    <form>
      <div>
        <label htmlFor={`${id}-username`}>Username:</label>
        <input id={`${id}-username`} type="text" name="username" />
      </div>
      <div>
        <label htmlFor={`${id}-password`}>Password:</label>
        <input id={`${id}-password`} type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UseIdEg