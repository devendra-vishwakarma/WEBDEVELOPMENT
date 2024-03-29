import React from 'react'

function Headers() {

    let filteredDataq = arr.filter((item)=>{
        return Object.values(item).join("").toLowerCase().includes("by which you want to filtr such as Mobile,Laptop, Cloths");
    })
    return <>
        <div>
            <header className="header bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="logo512.png" />
                            <br />
                            <small className="text-white">Shopping App</small>
                        </div>
                        <div className="col-md-6">
                            <div className="search-input">
                                <input type="text" placeholder="Search product" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="options">
                                <small>View Cart</small>
                                <small>Sign out</small>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div className='nav-bar-wrapper'>
           <div className='items'>Filter by {"->"}</div>
           <div className='items'>No Filter</div>
           <div className='items' onClick={filteredDataq()}>Mobile</div>
           <div className='items'>Laptop</div>
           <div className='items'>Tablate</div>
           <div className='items'>{">="}29999</div>
           <div className='items'>{">="}29999</div>
           <div className='items'>{">="}29999</div>
           <div className='items'>{">="}29999</div>

        </div>
    </>
}

export default Headers




