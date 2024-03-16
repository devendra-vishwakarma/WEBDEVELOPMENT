import React from "react";
export default class StateChange extends React.Component {
    constructor() {
        super();
        this.state = ({
            name: "dhara",
            collage: "bansal",
            age: 21
        });
    }

    changeage = ()=>{
         this.setState({age:this.state.age+1})
    }

    render(){
        return<>
        <h1>hello this is me</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.collage}</h1>
        <h1>{this.state.age}</h1>

        <button onClick={this.changeage}>click to change age</button>

        </>
    }
}