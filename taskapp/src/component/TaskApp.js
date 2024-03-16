import React from "react";
import TaskData from "../TaskData";
import "./TaskApp.css"
export default class TaskApp extends React.Component {
    constructor() {
        super();

        this.state = ({
            TaskDATAA: TaskData
        })
    }


    render() {
        return <>
            <h1 className="text-center bg-success p-5 text-white">TASK-MANAGER</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 ml-5">
                        <label className="display-1">Task</label>
                        <input type="text" placeholder="enter your task Priority" className="col-md p-3 border border-primary rounded" />
                    </div>
                    <div className="col-md-5">
                        <label className="display-1">Date</label>
                        <input type="text" placeholder="enter your task Priority" className="col-md p-3 border border-primary rounded placehoder" />
                    </div>
                </div>
            </div>
            <hr />

            <div className="row buttoncenter">
                <div className="btn btn-success col-md-3 sizeis">Active</div>
                <div className="btn btn-danger col-md-3 sizeis">De-Active</div>
            </div>
            <table width="100%" className="table" style={{ fontSize: "2rem" }} >
                <thead>
                    <th>S.no</th>
                    <th>Priority</th>
                    <th>title</th>
                    <th>Date</th>
                    <th>Active</th>
                    {/* <th>De-Active</th> */}
                </thead>
                <tbody>
                    {this.state.TaskDATAA.map((task, index) =>
                        <tr key={index} className={
                            task.priority == 'high' ? 'high' : task.priority == 'normal' ? 'normal' : task.priority == 'low' ? 'low' : 'default-class'
                        }>
                            <td>{index + 1}</td>
                            <td>{task.date}</td>
                            <td >{task.priority}</td>
                            <td>{task.title}</td>
                            <td><button className="btn btn-primary pl-5 pr-5 pt-3 pb-3 " style={{ fontSize: "2rem" }} onClick={()=>{
                                
                            }}>{task.Active?"Deactive":"Active"}</button></td>
                            {/* <td><button className="btn btn-primary pl-5 pr-5 pt-3 pb-3 " style={{ fontSize: "2rem" }} >Edit</button></td>
                            <td><button className="btn btn-danger pl-5 pr-5 pt-3 pb-3" style={{ fontSize: "2rem" }}>Delete</button></td> */}
                        </tr>

                    )}
                </tbody>
            </table>

        </>
    }
}
