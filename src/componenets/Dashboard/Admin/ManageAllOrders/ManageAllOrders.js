import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const { isLoading  } = useAuth();

    useEffect(() => {
        fetch('https://mysterious-gorge-90895.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };
     
      const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://mysterious-gorge-90895.herokuapp.com/statusUpdate/${orderId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
             if (result.modifiedCount) {
                alert('Status Updated');
                reset();
                window.location.reload();
            }
            
        });
         
      };
    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://mysterious-gorge-90895.herokuapp.com/purchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
           <h3 className="mb-3">Manage All Orders</h3>
           <ul>
                {
                    users.map(user => <div className="container border border-1 m-2"
                        key={user._id}
                    ><h5 className="mt-2">Name:{user.name} </h5>
                    <p>Product:{user.product} and Price: {user.price}</p>
                    <p> Email:{user.email}</p> 
                    <p> Address:{user.address}, City:{user.city}, Phone:{user.phone}</p> 
                    <p>Status: {user.status}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                  <select defaultValue={user.displayName}
                    onClick={() => handleOrderId(user?._id)}
                    {...register("status")}
                  >
                    {/* <option value={user?.status}>{user?.status}</option> */}
                    <option value={user?.status}>{user?.status}</option>
                    {/* <option value="">Select Status</option> */}
                    <option value="Shipping">Shipping</option>
                    <option value="Deliverd">Delivered</option>
                  </select>
                  
                  <input className=" m-3" type="submit" />
                </form>
                {isLoading }
                    
                        {/* <Link to={`/users/update/${user._id}`}><button className="me-2  button">Update</button></Link> */}
                        <button className="btn btn-primary mb-3" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </div>)
                }
            </ul> 
        </div>
    );
};

export default ManageAllOrders;