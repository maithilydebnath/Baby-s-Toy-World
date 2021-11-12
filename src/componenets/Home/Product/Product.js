import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, description, img, _id, price } = product;
    return (
        <div className=" product">
        <img className="pt-4 " src={img} alt="" />
        <h4 className="mt-3">{name}</h4>

        <p className="px-2">{description}</p>
        <h6>Price: $ {price}</h6>
        <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary m-2">Buy Now</button>
        </Link>
            
        </div>
    );
};

export default Product;