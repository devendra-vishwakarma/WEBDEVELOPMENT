import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: "devendraaaaa"
    })
    this.obj = {name:"hello",class:12}
  }
   
  render() {
    return <>
      <h1>parent</h1>
      <Child1 name={this.state.name}/>
      <Child2 name={this.obj}/>
    </>
  }
}