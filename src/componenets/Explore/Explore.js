import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    
    return (
        <div>
            <h2 className="m-4">Explore Our Toys for your Little One</h2>
            <div id="explore" className="product-container container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Explore;