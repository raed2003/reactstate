import React, { useState } from 'react'

function Counter() {
    const [counter,setcounter] =useState(0)
    console.log(counter)
    const increment = ()=>{
        setcounter(counter+1)
        console.log(counter)
    }
    const decrement = ()=>{
        setcounter(counter-1)
        console.log(counter)

    }
  return (
    <div>
    <button onClick={increment} style={{background:"green",marginRight:"20px"}}>+</button>
    <span>{counter}</span>
    <button onClick={decrement} style={{background:"red",marginLeft:"20px"}}>-</button>
    </div>
  )
}

export default Counter