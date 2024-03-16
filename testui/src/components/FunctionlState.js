import React, { useState } from "react";

export default function FunctionState({age,data}) {
    let a = 32;
    const [number, setvalue] = useState(a);

    return <>
        <h1>this is function component</h1>
        <h1>{number}</h1>
        <h1>{age}</h1>
        <h1>{}</h1>
        <button onClick={()=>{
            setvalue(number+1);
        }}>click to change</button>
    </>
}