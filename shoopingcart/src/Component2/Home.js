import React, { useState } from 'react';
import Navbar from './Navbar';
import "./Home.css"
function Home({ imagess }) {
      const[cart,cartitems] =useState([]);
    return (
        <>
            <Navbar />
            {/* <div>Home</div> */}
            <div className='container-fluid d-flex justify-content-around align-item-center flex-wrap' >
                {imagess.map((image, index) => (
                    <div key={index} className='mt-5 mt border d-flex flex-column' style={{ overflow: "hidden" }}>
                        <img src={image.src.medium} alt={`Image ${index}`} className='imagehovers' />
                        <div className='text-center btn btn-info p-3 mt-5' style={{ fontSize: "1rem", fontWeight: "bold" }} onClick={addtocartiten()}>Add TO Cart</div>
                        <div className='d-flex justify-content-center align-item-center mb-5'>
                            <div className='text-center btn btn-success mt-5 pl-3 pr-3' style={{ fontSize: "1rem", fontWeight: "bold",width:"30%" }}>View-More</div>
                            <div className='text-center btn btn-danger mt-5  pl-3 pr-3' style={{ fontSize: "1rem", fontWeight: "bold",width:"30%"  }}>rating</div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
