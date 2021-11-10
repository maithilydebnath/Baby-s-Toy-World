import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
 
    const {email}=useParams();
    const { user } = useAuth();
    const [userBooking, setUserBooking] = useState([]);

    useEffect(() => {
        fetch(`https://vast-falls-32206.herokuapp.com/${email}`)
            .then(res => res.json())
            .then(data => setUserBooking(data));
    }, []);
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://vast-falls-32206.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = userBooking.filter(user => user._id !== id);
                        setUserBooking(remainingUsers);
                    }
                });
        }
    }
    const handleBookingUser = id =>{

    }
    return (
        <div>
            <h2 className="text-primary m-2">My Order Lists</h2>
            
            <ul className="container">
                {
                    userBooking.map(user => <li className="border border-1 m-2"
                        key={user.email}
                    ><h4 className="mt-2">Name:{user.name} </h4>
                    <p>Purpose:{user.purpose} and Price: {user.price}</p>
                    <p> Email:{user.email}</p> 
                    <p> Address:{user.address}, City:{user.city}, Phone:{user.phone}</p> 
                    
                        <button className="button me-2" onClick={() => handleBookingUser(user._id)}>Booking</button>
                        <button className="button" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>)
                }
            </ul> 
                    
        </div>
    );
};

export default MyOrders;