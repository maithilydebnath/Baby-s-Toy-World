import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const {productId}=useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState([])
    // const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
    
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    
    const onSubmit = data => {
      
        
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Purchase completed Successfully');
                    // clearTheCart();
                    reset();
                }
            })
    }

    return (
        <div>
            <h2>Purchase</h2>
            <h3 className="mt-4 mb-4 text-primary"> Purchase Details : {product.name}</h3>
            <h5 className="mt-4 mb-4">Purchase Id : {productId}</h5>
            
            <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
              
                <img src={product.img} alt="" srcset="" />
                <p className="mt-2"><b>Purpose:{product.name}</b></p>
                <p className="mt-2"><b>Price:$ {product.price}</b></p>
                <input defaultValue={product.name} {...register("purpose")} />
                <input defaultValue={product.price} {...register("$price")} />
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                                 
                <input className="button" type="submit" />
                
            </form>
        </div>
    );
};

export default Purchase;