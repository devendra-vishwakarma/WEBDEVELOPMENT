import React from 'react'

function Headers() {


    return <>
        <div className='navbars ml mt-5' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className='button btn btn-outline-primary mr-4'>Nature</div>
            <div className='button btn btn-outline-danger mr-4'>Travel</div>
            <div className='button btn btn-outline-success mr-4'>City</div>
            <div className='button btn btn-outline-danger mr-4'>Car</div>
            {/* <div className='button btn btn-outline-info mr-4'>Fashion</div>
            <div className='button btn btn-outline-warning mr-4'>Animals</div>
            <div className='button btn btn-outline-light mr-4'>Tech</div>
            <div className='button btn btn-outline-dark mr-4'>Buisness</div>
            <div className='button btn btn-outline-primary mr-4'>Tokto</div>
            <div className='button btn btn-outline-primary mr-4'>Dubai</div>
            <div className='button btn btn-outline-primary mr-4'>Saved</div> */}
            <div className='btn btn-warning mr-4'><i class='bx bx-cart'>ViewCart</i></div>
            {/* <div className='button btn btn-outline-primary mr-4'></div> */}

        </div>

        <div className="mb-3 mt-5 inputsize d-flex align-item-center justify-content-center">

            <input style={{width:"50%"}}
                type="email"
                className="form-control ml-5 text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder='Search Product'
            />
        </div>
    </>
}

export default Headers