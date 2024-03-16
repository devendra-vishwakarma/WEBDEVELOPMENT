import React from "react";
import PropsObject from "./PropsObject";

export default class Header extends React.Component {
    constructor() {
        super();
    }


    render() {
        let message = this.props.value;
        console.log(message);

    return <>
            <h1>{this.props.value}</h1>
            <h1 className="text-center bg-success p-5 text-white">TASK-MANAGER</h1>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 ml-5">
                        <label className="display-1">Task</label>
                        <input type="text" placeholder="enter your task Priority" className="col-md p-3 border border-primary rounded" />
                    </div>
                    <div className="col-md-5">
                        <label className="display-1">Date</label>
                        <input type="text" placeholder="enter your task Priority" className="col-md p-3 border border-primary rounded" />
                    </div>
                </div>
            </div>
            <PropsObject message = {message}/>
        </>
    }
}