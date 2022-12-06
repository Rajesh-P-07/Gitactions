import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  return (
    <>
    <h2>Counter</h2>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count-2)}>DEC</button>
    <button onClick={()=>setCount(count+2)}>INC</button>
    </>
  )
}

export default Counter