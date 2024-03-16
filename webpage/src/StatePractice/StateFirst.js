import React from "react";
import { useState } from "react";

function StateFirst(){
    let [name,setName] = useState("hello");
    return <>
     <h1>{name}</h1>

     <button onClick={()=>{
        name=="hello"?setName("hello world"):setName("0")
     }}>click me to change</button>
    </>
}
export default StateFirst;