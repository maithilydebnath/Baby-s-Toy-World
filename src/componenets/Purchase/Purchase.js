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
        fetch(`https://mysterious-gorge-90895.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    
    const onSubmit = data => {   
        data.status ='pending';  
        fetch('https://mysterious-gorge-90895.herokuapp.com/purchase', {
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
        <div >
             <h2 className="m-2">Purchase</h2>
            <h4 className="mt-4 mb-4 text-primary"> Purchase Details : {product.name}</h4>
            <h5 className="mt-4 mb-4">Purchase Id : {productId}</h5>
            <div className="container">
                <div className="row">
                    <div className="col purchase text-center mt-3">
                    <img src={product.img} alt="" srcset="" />
                    <p className="mt-2 "><b>Product:{product.name}</b></p>
                    <p className="mt-2 "><b>Price:$ {product.price}</b></p>
                    </div>
                    <div className="col">
                    <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
              
                    {/* <img src={product.img} alt="" srcset="" /> */}
                    {/* <p className="mt-2 text-start"><b>Product:{product.name}</b></p>
                    <p className="mt-2 text-start"><b>Price:$ {product.price}</b></p> */}
                    <input defaultValue={product.name} {...register("product")} />
                    <input defaultValue={product.price} {...register("price")} />
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                                    
                    <input className="btn btn-primary mb-3" type="submit" />
                    
                </form>
                    </div>       
                </div>
            </div>
            
            
        </div>
    );
};

export default Purchase;