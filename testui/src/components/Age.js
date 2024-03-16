import React from "react";
// import { Component } from "react";

export default class Age extends React.Component {
    constructor() {
        super();

        this.state = ({
            name: "chetna",
            collage: "clothmarket",
            age: 22,
            agee:25
        });
    }

    render(){
        return <>
          <h1>{this.state.name}</h1>
          <h1>{this.state.collage}</h1>
          <h1>{this.state.age}</h1>
          <button onClick={()=>{
              this.setState({age:this.state.age+1})
          }}>click me</button>

          <ol>
            <li>{this.state.name}</li>
            <li>{this.state.collage}</li>
            <li>{this.state.agee}</li>
          </ol>
          <button onClick={()=>{
              this.setState({agee:50})
          }}>click me</button>

        </>
    }
}