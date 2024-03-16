import "./Header.css"
import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="borders">
            <ul className="nav">
                <div className="nav width-400">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                </div>
                <div className="mr-20">Test@example.com</div>
            </ul>
        </div>
 
        )

    }
}

