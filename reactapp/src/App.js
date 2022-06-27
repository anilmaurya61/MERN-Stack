import React, { useState } from 'react'

export default function App() {
  const [count, setCount]=useState(0);
  function des(){
      if(count!=0){
        setCount(count-1);
      }
  }
  return (
    <div>
      <h1>Counter value : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <button onClick={()=>des()}>Desc</button>
    </div>
  )
}

