import React from "react";
import C from "../FunctionComponent/C";
import B from "../FunctionComponent/B";

export default function A() {
    let personalDetails = {
        name: 'deviparsad',
        class: 10,
        School: "rai-Acedemy"
    }
    let contactDetails = {
        number: "8959876646",
        email: "devendravishvakarma128@gmail.com"
    }

    return <>
    <h1>hello this is me UserDetails</h1>
          <B value1={personalDetails}/>
          <C value2={contactDetails}/>
    </>
}