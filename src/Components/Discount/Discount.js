import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <div className='container-fluid py-5 banner'>
            <div className='container'>
                <div>
                    <h2 className='display-4 fw-bold'>December sale is on! <br /> with big <span className='d-text'>Discount...</span></h2>
                    <p className='display-6 fw-light py-3'>Sale! Upto <span className='fw-bold d-text'>50%</span> off</p>
                    <button className="btn d-btn text-white fs-4 px-4 rounded-5">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;