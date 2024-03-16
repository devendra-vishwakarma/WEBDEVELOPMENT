import axios from "axios";
import { useEffect, useState } from "react"
import Headers from "./Headers";
import { Link } from "react-router-dom";
// import Headers from "./Headers";
// import Products from "./Products";

export default () => {
    const [products, setproduct] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                console.log(response.data.products
                    , "aa gaya");
                setproduct(response.data.products)
            }).catch(err => {
                console.log(err);
            });
    }, [])

    // const getProductByCategory = (id)=>{
    //     axios.get(`https://dummyjson.com/products/${id}`)
    //     .then(response=>{
    //         setProductList(response.data.productList);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // }
    let filteredDataq = arr.filter((item)=>{
        return Object.values(item).join("").toLowerCase().includes("by which you want to filtr such as Mobile,Laptop, Cloths");
    })

    return <>
        <Headers />
        <div className="container mt-3">
            <div className="row">
                {products.map((product, index) => <div className="col-md-4 p-3" key={index}>
                    <div className="d-flex flex-column align-items-center" style={{ height: "400px", boxShadow: '0 0 5px grey' }}>
                        <img src={product.thumbnail} style={{ height: "250px", width: '100%' }} />


                        <h4 className="text-center mt-2">{product.title.slice(0, 24)}</h4>
                        <p className="mt-2 mb-2 text-center">Price : <b className="text-success">{product.price} Rs.</b></p>


                        <small className="text-primary"><Link>View more</Link></small>
                        <button style={{ width: "90%" }} className="btn btn-secondary text-white">Add To Cart</button>
                    </div>
                </div>)}
            </div>
        </div>
    </>
}
