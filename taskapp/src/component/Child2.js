import React from "react";
import Parent from "./Parent";
 export default class Child2 extends React.Component{
     constructor(){
        super();
     }
     render(){
        return<>
          {/* <Parent/> */}
          <h1>Child2</h1>
          <h1>{this.props.name.class}aaaaaaaaaaaa</h1>
        </>
     }
 }