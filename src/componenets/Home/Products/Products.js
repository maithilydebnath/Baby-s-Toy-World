import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
             <h2 className=" mt-5 "> <b>Baby Toys</b> </h2>
            <div id="products" className="product-container container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;