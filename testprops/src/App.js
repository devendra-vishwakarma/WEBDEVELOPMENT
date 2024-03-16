import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Home from "./Component/Home"
function App() {
  const [cartitem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("https://dummyjson.com/products")
      setCartItem(res.data.products);
    }
    fetchdata();
  }, [])

  console.log(cartitem, "this is");

  return <>
    <Routes>
      <Route path='/' element={<Home cartitem={cartitem}/>}/>
    </Routes>
  </>
}

export default App