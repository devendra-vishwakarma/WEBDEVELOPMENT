import React from "react";
import TaskData from "../TaskData";
export default class PropsObject extends React.Component {
    constructor() {
        super();
        this.state = ({
            TaskDetails: TaskData
        })
    }

    render(){
     return <>
       <h1>{this.props.message}</h1>
     </>
    }
}