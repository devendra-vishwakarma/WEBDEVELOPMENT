import { Component } from "react";

export default class Footers extends Component{
     render(){
        return(
        <div className="FooterDesign">
            <div>
                <ul className="footerlist">
                    <li>Work</li>
                    <li>Work-List</li>
                    <li>Manage-task</li>
                    <li>Help-Desk</li>
                </ul>
            </div>
            <div className="BackgroundImg">
            <img src="logo192.png"/>
            </div>
            <div>hello</div>
        </div>
        )
     }
}