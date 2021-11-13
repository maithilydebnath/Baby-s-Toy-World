import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const [Loading, setLoading] = useState(true);
    if (isLoading) { return <CircularProgress /> }
    return (

        <Route
            {...rest}
            render={({ location }) => admin ? children : <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                
            }
        />
    );
};

export default AdminRoute;