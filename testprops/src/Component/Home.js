import React from 'react'

function Home({ cartitem }) {
    console.log(cartitem, "items");
    return <>
        <div className='container-fluid'>
            <div className='d-flex align-item-center justify-content-center flex-wrap m-5 p-5'>{cartitem.map((product, index) => {
                return <>
                    <div className='border border-danger d-flex align-item-center justify-content-center flex-column text-center flex-wrap m-5' >{<img style={{ height: "25rem", width: "25rem" }} src={product.
                        thumbnail
                    } />}
                     <button className='btn btn-danger'><b>ADD TO CART</b></button>
                     <div>{product.title}</div>
                    </div>
                </>
            })}</div>
        </div>
    </>
}

export default Home