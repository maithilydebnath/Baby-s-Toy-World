import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { User, signInUsingGoogle, handleEmailChange,
        handlePasswordChange, handleLogin, setUserName, error,

        setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);


            })

    }

    return (
        <div className="m-5">

            <div className="container m-5 ">
                <h3 className="m-4 text-primary"> <b>Login For Booking Your Trip & Explore More</b></h3>
                {/* <form onSubmit={handleLogin}  >

                    <div className="row mb-3 ">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-8">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3 text-danger"> {error}</div>
                    <button type="submit" className="btn btn-warning m-2">Login</button>

                </form>
                <p className="m-2">Need to Create Account ? <Link to="/register">Create Account</Link></p> */}
                <div class="row ">
                    <div class="col align-self-start mb-2">
      
                    </div>
                    <div class="col align-self-center border border-2  border-primary m-3">
                    <div className="m-3 text-center"> <b>Sign in with Google</b> </div>
                        <button onClick={handleGoogleLogin} className="button m-2 mb-4 tect-center" >Google Sign In</button>
                
                     </div>
                    <div class="col align-self-end mb-2">
                    
                    </div>
  </div>
                {/* <div className= " border border-2  border-primary m-3">
                <div className="m-3">---------------------- <b>Sign in with Google</b> -----------------------</div>
                <button onClick={handleGoogleLogin} className="button m-2 mb-4 tect-center" >Google Sign In</button>
                </div> */}
            </div>
        </div>
    );
};

export default Login;