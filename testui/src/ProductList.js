import React, { Component } from "react";
import data from './data';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: data
        };
    }

    handleDelete = (index) => {
        const updatedProductList = [...this.state.productList];
        updatedProductList.splice(index, 1);
        this.setState({ productList: updatedProductList });
    };

    updateProduct = (index) => {
        const { productList } = this.state;
        const updatedProductList = [...productList];

        updatedProductList[index].title = "iPhone14Pro-Max";
        this.setState({ productUpdate: updatedProductList });
        console.log("hello");
    }

    render() {
        const { productList } = this.state;

        return (
            <>
                <h1>Product List Component</h1>
                <hr />
                <table className="table" width={2000}>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <hr />
                    </thead>
                    <tbody>
                        {productList.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td><img src={product.thumbnail} width='250px' height='250px' alt={product.title} /></td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => this.updateProduct(index)}>Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => this.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}
