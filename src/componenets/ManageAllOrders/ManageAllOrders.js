import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://vast-falls-32206.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // DELETE AN USER
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
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
           <ul>
                {
                    users.map(user => <li className="container border border-1 m-2"
                        key={user._id}
                    ><h4 className="mt-2">Name:{user.name} </h4>
                    <p>Purpose:{user.purpose} and Price: {user.price}</p>
                    <p> Email:{user.email}</p> 
                    <p> Address:{user.address}, City:{user.city}, Phone:{user.phone}</p> 
                    
                        {/* <Link to={`/users/update/${user._id}`}><button className="me-2  button">Update</button></Link> */}
                        <button className="button" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>)
                }
            </ul> 
        </div>
    );
};

export default ManageAllOrders;