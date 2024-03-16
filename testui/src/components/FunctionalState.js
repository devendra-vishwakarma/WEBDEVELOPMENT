import React, { useState } from "react";
 export default function FunctionlState({age,data,name}) {
    const[Number, setNumber] = useState(30);

    return <>
        <h1>{Number}</h1>
        <h1>{age}</h1>
        <h1>{data.name}</h1>
        <h1>{data.collage}</h1>
        <h1>{name.hello}</h1>

        <h1></h1>
        <button onClick={() => {
            setNumber(Number+1);
        }}>daba</button>
    </>
}