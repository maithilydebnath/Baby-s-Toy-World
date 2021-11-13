import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-gorge-90895.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
             <h2 className=" mt-5 "> <b>Baby Toys</b> </h2>
            <div id="products" className="product-container container">
                {
                    products.slice(0,6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;