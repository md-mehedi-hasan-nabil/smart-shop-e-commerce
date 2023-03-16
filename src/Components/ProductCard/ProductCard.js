import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { _id, price, productDesc, productImage, productName } = product || {};
    const { cart } = useSelector(state => state.cart)
    const [disabledBtn, setDisabledBtn] = useState(false)

    useEffect(() => {
        const existingProduct = cart.filter(pd => pd._id === _id);
        if (existingProduct.length > 0) {
            setDisabledBtn(true)
        }
    }, [_id, cart])

    // cartProduct.filter(pd => pd._id)

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
        </div>
    );
};

export default ProductCard;