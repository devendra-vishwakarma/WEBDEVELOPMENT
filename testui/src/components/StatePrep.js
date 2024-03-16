import React, { Component, useState } from "react";

// function Buttons() {
//     let [name, setname] = useState(" ")
//     return <>
//         <h1>this side me {name}</h1>

//         <button onClick={() => {
//             // setname("devendra vishwakarma");
//             name == "devendra" ? setname("chintu") : setname("devendra")
//         }}>click me to change</button>

//         <button onClick={() => {
//             // setname("devendra vishwakarma");
//             name == "devendra" ? setname("devendra vishwakarma") : setname("devendra")
//         }}>click me to devendra</button>

//         <button onClick={() => {
//             // setname("devendra vishwakarma");
//             name == "devendra vishwakarma" ? setname("devendra sharma") : setname("devendra")
//         }}>click me to devendra</button>
//     </>
// }

// EXAMPLE OF STATE AND PROPS IN REACT'S CLASS COMPONENT STARTS
// class Buttons extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             name: "world",
//             isCard: false
//         }
//     }
//     render(){
//         return <>
//            <h1>this side devendra</h1>
//            <h2>{this.state.name}</h2>
//            <button onClick={()=>{
//             this.setState({name:"dkjfdsf"})
//            }}>Change the state value</button>
//             <hr/>
//             <Card cname={this.state.name}/>
//         </>
//     }
// }

// class Card extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return <>
//           <h2>Prop in Card Component</h2>
//           <h3>{this.props.cname}</h3>
//         </>
//     }
// }
// EXAMPLE OF STATE AND PROPS IN REACT'S CLASS COMPONENT ENDS

// EXAMPLE OF STATE AND PROPS IN REACT'S FUNCTIONAL COMPONENT STARTS
// function Buttons(){
//     const [name, setName] = useState("hello");
//     const [age, setAge] = useState(12);
//     const [gender, setGender] = useState("male");
//     return <>
//     <h3>{name}</h3>
//     <button onClick={()=>setName("World")}>CHsnge the value</button>
//     <hr/>
//     <Card cardName={name} ageForCard={age} gender={gender}/>
//     </>
// }


// function Card(props){
//     console.log(props);
//     return <>
//     <h4>Card Component</h4>
//     <h3>{props.cardName.name}hiiiii</h3>
//     <h3>{props.ageForCard}</h3>
//     <h3>{props.gender}</h3>
//     </>
// }




export default Buttons;