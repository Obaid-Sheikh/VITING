import React, { useState } from "react";

function Remove(){
  const [data, setData] = useState([1,2,3,4,5,6]);
  return(
    <div>
      {data.map(item => <h1>{item}</h1>)}

      <button onClick={()=>setData(()=>{
        return data.filter((item,index)=> index != data.length - 1)})}
        className="px-2 py-4  text-white rounded-full bg-blue-500">
         pop
      </button>
    </div>
  )
}

export default Remove;