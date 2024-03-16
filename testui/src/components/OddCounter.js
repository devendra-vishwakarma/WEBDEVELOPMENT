import React from "react";
 export default class OddCounter extends React.Component{
    constructor(){
        super();

        this.state = ({
            odd:1
        });
    }

    render(){
        return<>
          <h1>{this.state.odd}111</h1>
          <button onClick={()=>{
              this.setState({odd:this.state.odd+2});
          }}>click to increase odd</button>
          <hr/>
        </>
    }
}