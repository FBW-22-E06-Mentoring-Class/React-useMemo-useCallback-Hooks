
import React,{ useState,useCallback, useMemo } from 'react';
import Child from './Child';

  let numbers = [2,4,5,7,2,12,3,4,8,9]

function App() {
  console.log("App render .......")
  const [counter,setCounter] = useState(0)
  const [color,setColor]= useState("green")


  const computedValue= ()=>{
    console.log("computing large value")
    return numbers.sort((a,b)=>a-b)[numbers.length-1]
  }
 // useMemo memorize return value
  const MemoValue =  useMemo(()=>computedValue(), []) 

  const changeColor=()=>{
    console.log(color)
    setColor((previousState)=>previousState==="green"? "blue":"green")
  } // memory location 1234 // memory location 3123

  // useCallback hook memorize callback function
  const callBackChangeColor = useCallback(()=>changeColor() , [])

  return (
    <div className="App">
      <h1>useMemo and useCallback Hook</h1>
      <h2>Counter: {counter} </h2>
      <button onClick={()=>setCounter(counter+1)}>increment</button>
      <Child color={color} changeColor={callBackChangeColor}/>
      <h2>Random Number: {MemoValue}</h2>
    </div>
  );
}

export default App;