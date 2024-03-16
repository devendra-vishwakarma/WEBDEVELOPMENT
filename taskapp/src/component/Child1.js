import React from "react";
export default class Child1 extends React.Component {
   constructor() {
      super();
   }
   render() {
      return <>
         <div className="child1">
            <h2>
               {this.props.name}
            </h2>
         </div>
      </>
   }
}