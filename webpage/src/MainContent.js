// import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import "./MainContent.css"

export default class MainContent extends Component {
  render() {
    return (
      <div className="maindiv">
        <div>
          <img src="logo192.png"/>
          <div class="text-box">
            <a href="#" class="btn btn-white btn-animate">click me</a>
          </div>
          <div>
            <p>The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
        <div>
          <img src="Angular.png" className="Angulars" />
          <div class="text-box">
            <a href="#" class="btn btn-white btn-animate">click me</a>
          </div>
          <div>
            <p>The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
      </div>
    )
  }
}