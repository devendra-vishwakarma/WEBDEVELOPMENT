import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import "./Home.css"

function Home() {
    const [productList, setProductList] = useState([]);
    console.log(typeof productList);

    useEffect(() => {

        axios.get("https://dummyjson.com/products")
            .then((response) => { setProductList(response.data.products) })
            .catch((err) => { console.log(err); });

    }, [])
    return <>
        <Header />
        <h1 className='text-center tables bg-danger p-2'>WEL_COME TO HOME</h1>

        <table width={"100%"} className='text-center table' border={"5px solid black"}>
            <thead>
                <th>S.no</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>PHOTO</th>
                <th>Delete</th>
                <th>Edit</th>
            </thead>
            <tbody className='fontsizes'>
                {productList.map((product, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td><img src={product.thumbnail} className='imgess' /></td>
                    <td><button className='btn btn-outline-danger pl-5 pr-5' onClick={product = product.id==productList.id}><h5>Delete</h5></button></td>
                    <td><button className='btn btn-outline-success pl-5 pr-5'><h5>Edit</h5></button></td>
                </tr>)}
            </tbody>
        </table>
        <h1 className='text-center bg-danger p-5 text-white'>Thanks-for-visit</h1>
    </>
}

export default Home