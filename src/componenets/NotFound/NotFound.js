import React from 'react';
import { Link } from 'react-router-dom';
import notFoundimg from '../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFoundimg} alt="" srcset="" className="m-2" />
            <br />
            <Link to="/"><button className="button m-2">Go Back</button> </Link>
        </div>
    );
};

export default NotFound;