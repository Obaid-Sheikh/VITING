import React, { useState } from "react";

function AddingInState(){
  const [val, setVal] = useState([1,2,3,4,5,6]);
  return (
    <div>
      {val.map(item => <h1>{item}</h1>)}

      <button onClick={()=>setVal(()=>{
        return val.map(item => item+1 )})}
        className="px-2 py-4  text-white rounded-full bg-blue-500">
         add in all 
      </button>
    </div>
  )



}

export default AddingInState;