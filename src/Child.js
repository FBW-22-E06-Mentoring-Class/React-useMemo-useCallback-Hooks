import React from 'react'

 function Child({color,changeColor}) {
    console.log("Child render ......")
  return (
    <div><h1 style={{backgroundColor:color}}>Child Component</h1> 
    <button onClick= {changeColor}>change color</button>
    </div>
  )
}
export default React.memo(Child)