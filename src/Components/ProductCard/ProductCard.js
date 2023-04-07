import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment/moment';

const ProductCard = ({ product }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { _id, price, productDesc, productImage, productName, category } = product || {};
    const { cart } = useSelector(state => state.cart)
    const [disabledBtn, setDisabledBtn] = useState(false)

    useEffect(() => {
        const existingProduct = cart.filter(pd => pd._id === _id);
        if (existingProduct.length > 0) {
            setDisabledBtn(true)
        }
    }, [_id, cart])


    function addProductToCart() {
        const obj = {
            _id, price, productDesc, productImage, productName,
        }
        dispatch(addToCart(obj))
    }

    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card border border-0 shadow">
                <img src={productImage} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <Link to={`/product-details/${_id}`}>
                        <h5 className="card-title fw-bold">{productName}
                        </h5>
                    </Link>
                    {category && <p>{category}</p>}
                    <p className="card-text fw-light py-2">{productDesc.slice(0, 100)}...</p>
                    <div className='pb-3 d-flex justify-content-between'>
                        <p className="card-text fw-bold">Price {price}$</p>
                        <p className="card-text text-warning">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </p>
                    </div>
                    <button disabled={disabledBtn} onClick={addProductToCart} className="btn d-btn text-white w-100"><i className="fas fa-shopping-cart me-2"></i>Add To Cart</button>
                </div>
            </div>
            {
                location.pathname === "/all-products" && product?.review?.length > 0 && product.review.map(pd => <div key={pd.user._id} className='border rounded mt-1'>
                    <div className='d-flex align-items-center gap-1'>
                        <img style={{ width: '3rem', height: '3rem' }} className='rounded-circle ms-2' src={pd.user.photoURL} alt="profile" />
                        <div className='pt-2'>
                            <h6 style={{ marginBottom: '-1px' }}>{pd.user.displayName}</h6>
                            {pd?.date && <p>{moment(pd?.date).fromNow()}</p>}
                        </div>
                    </div>
                    <p className='lead ps-3'>{pd.message}</p>
                </div>)
            }

        </div>
    );
};

export default ProductCard;