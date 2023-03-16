import React from 'react';

const Extra = () => {
    return (
        <div className='container-fluid p-5 bg-light'>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className='text-center'>
                        <div><i className="fas fa-shipping-fast fa-3x d-color"></i></div>
                        <div>
                            <h4 className='pt-3 fw-bold'>Free Shipping</h4>
                            <p className='fw-light'>When order over $75</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='text-center'>
                        <div><i className="fas fa-phone-volume fa-3x d-color"></i></div>
                        <div>
                            <h4 className='pt-3 fw-bold'>24/7 Support</h4>
                            <p className='fw-light'>Get support all day</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='text-center'>
                        <div><i className="fas fa-sync fa-3x d-color"></i></div>
                        <div>
                            <h4 className='pt-3 fw-bold'>Refund</h4>
                            <p className='fw-light'>Get refund within 3 days!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;