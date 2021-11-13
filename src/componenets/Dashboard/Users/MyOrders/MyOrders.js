import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://mysterious-gorge-90895.herokuapp.com/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user.email]);

    const handlePlaceOrder = id =>{
        alert('Thanks for the shopping with us');
    }

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://mysterious-gorge-90895.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
        }
    }
    return (
        <div>
            <h2>My Orders: {myOrders.length}</h2>
            <ul>
                {
                    myOrders.map(user => <div className="container border border-1 m-2"
                        key={user._id}
                    ><h5 className="mt-2">Name:{user.name} </h5>
                    <p>Product:{user.product} and Price: {user.price}</p>
                    <p> Email:{user.email}</p> 
                    <p> Address:{user.address}, City:{user.city}, Phone:{user.phone}</p> 
                    
                        {/* <Link to={`/users/update/${user._id}`}><button className="me-2  button">Update</button></Link> */}
                        <button className="btn btn-primary mb-3 m-2" onClick={() => handleDeleteOrder(user._id)}>Delete</button>
                        <button className="btn btn-primary mb-3 m-2" onClick={() => handlePlaceOrder(user._id)}>Place Order</button>
                    </div>)
                }
            </ul> 
        </div>
    );
};

export default MyOrders;