import React from 'react';

const NewsCard = ({news}) => {
    const {img, title, desc, date} = news;
    return (
        <>
           <div className="col-md-6 col-lg-4">
            <div className="card border border-0 shadow">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text fw-light py-2">{desc.slice(0, 100)}...</p>
                        <div className='pb-3 d-flex justify-content-between'>
                            <p className="card-text fw-bold"><i className='fas fa-user me-2'></i>Admin</p>
                            <p className="card-text">
                                <i className='fas fa-calendar me-2'></i>{date}
                            </p>
                        </div>
                        <a href="/" className="btn btn-outline-dark w-100">read more<i className='ms-2 fas fa-angle-right'></i></a>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default NewsCard;