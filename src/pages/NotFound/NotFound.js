import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/notfound.png';

const NotFound = () => {
    return (
        <>
          <div className="container">
            <div className='w-75 mx-auto'>
                <img src={notFoundImg} className="img-fluid" alt="" />
            </div>
            <div className='text-center'>
                <Link className='btn btn-dark px-5' to="/">Back To Home</Link>
            </div>
          </div>  
        </>
    );
};

export default NotFound;