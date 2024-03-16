import React from "react";
 class EvenCounter extends React.Component{
    constructor(){
        super();
        this.state = ({
            name:"devendra",
            age:17,
            collage:"Bhoot-Bangla"
        });
    }
     render(){
        return<>
          <h1>this is age counter {this.state.age}</h1>
          <h1> {this.state.name}</h1>
          <h1> {this.state.collage}</h1>

          <button onClick={
            ()=>{
             this.setState({age:this.state.age+2});
          }
          }>click to grow age by 2 year</button>
        </>
     }
 }
 export default EvenCounter;