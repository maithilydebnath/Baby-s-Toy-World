import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useFirebase from '../../../../hooks/useFirebase';
import './AddAProduct.css';

const AddAProduct = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios.post('https://mysterious-gorge-90895.herokuapp.com/products', data)
        .then(res => {
            console.log('post hitted')
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
      
        console.log(data);
    };
        return (
            
        <div className="add-product">
            <h2 className="mt-2 ">Please Add a Product</h2>
            <form  className="mt-5 mb-5"onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="$price" />
                <input {...register("img")} placeholder="image url" />
                <input className="btn btn-primary m-2 " type="submit" />
            </form>
        </div>
            
        );
};

export default AddAProduct;