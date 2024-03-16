// import { useEffect } from 'react';
// import './App.css';
// import Home from './Component/Home';
// import Navbar from "./Component2/Navbar"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// function App() {

//   const API_KEY = "HINwy0tLMg1gFkYowRIUcjiwAAUrkDTGFvedsIbOssOYtxY0oqFZgCey";


//   useEffect(()=>{})
//   // useEffect(() => {
//   //   const fetchImage = async () => {
//   //     const res = axios.get(` https://api.pexels.com/v1/search?query=nature&per_page=1`,
//   //       {
//   //         headers: {
//   //           Authorization: API_KEY,
//   //         },
//   //       }
//   // ),[])
// }

// return <>
//   <Navbar />
// </>
// export default App;


// // import ViewDetails from './Component/ViewDetails';
// // import ProductDetails from './Component/ProductDetails';
// // import Cart from './Component/Cart';
// // import Searchitem from './Component/Searchitem';
// {/* <Routes>
//   <Route path='/' element={<Home/>} /> */}
// {/* <Route path='/signin' element={<h1>this is signin route</h1>} />
//   <Route path='/signup' element={<h1>this is singup route</h1>} />
//   <Route path='/product' element={<h1>this is product route</h1>} />
//   <Route path='/about' element={<h1>this is about route</h1>} />
//   <Route path='/viewcart' element={<h1>this is viewcart route</h1>} />
//   <Route path='/help' element={<h1>this is help route</h1>} /> */}
// {/* <Route path='product/:id'/>
//   <Route path='/search/:title'/> */}

// {/* </Routes> */ }
// {/* <ViewDetails /> */ }


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component2/Home';
import Saved from './Component2/Saved';
// import Navbar from "./Component2/Navbar"
import "./Component2/Home.css"

function App() {
  const [imagess, setimagess] = useState([]);
  const API_KEY = "HINwy0tLMg1gFkYowRIUcjiwAAUrkDTGFvedsIbOssOYtxY0oqFZgCey";

  useEffect(() => {
    const fetchimg = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=toys&per_page=80`, {
        headers: {
          Authorization: API_KEY
        }
      })
      setimagess(res.data.photos);
    }

    // console.log(imagess,"ye agay apna data");
    fetchimg();
  }, [])

  return <>
    <Routes>
      <Route path='/home' element={<Home imagess={imagess} />} />
      <Route path='/saved' element={<Saved />} />
    </Routes>

  </>
}

export default App