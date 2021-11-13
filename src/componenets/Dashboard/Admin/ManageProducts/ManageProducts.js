import React, { useEffect, useState } from 'react';
import Product from '../../../Home/Product/Product';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-gorge-90895.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://mysterious-gorge-90895.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Manage Products</h2>
            <div id="explore" className="product-container container">
                {
                    products.map(product => 
                    // <Product
                    //     key={product._id}
                    //     product={product}
                    // ></Product>
                    <div  key={product._id}> 
                        <img className="pt-4 " src={product.img} alt="" />
                        <h4 className="mt-3">{product.name}</h4>

                        <p className="px-2">{product.description}</p>
                        <h6>Price: $ {product.price}</h6>
                        <button className="btn btn-primary mb-3" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProducts;