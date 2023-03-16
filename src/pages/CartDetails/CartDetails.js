import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import ProductCartPrice from '../../Components/ProductCartPrice/ProductCartPrice'
import ActionBar from '../../Components/ActionBar/ActionBar'
import { deleteProductFromCart } from '../../features/cart/cartSlice'

export default function CartDetails() {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart);



    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        {
                            cart && cart?.length > 0 ?
                                cart.map(product => <div className='position-relative'>
                                    <div className="my-5 d-flex gap-3">
                                        <img src={product.productImage} style={{ objectFit: "cover" }} className="w-50 card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <button onClick={() => dispatch(deleteProductFromCart(product._id))} className='btn position-absolute top-0 end-0'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                </svg>
                                            </button>
                                            <h5 className="card-title fw-bold">{product.productName}
                                            </h5>
                                            <p className="card-text fw-light py-2">{product.productDesc.slice(0, 100)}...</p>
                                            <div className='pb-3 d-flex justify-content-between'>
                                                <p className="card-text fw-bold">Price {product.price}$</p>
                                                <p className="card-text text-warning">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                </p>
                                            </div>
                                            <div className='d-flex gap-1'>
                                                <ActionBar productId={product._id} product={product} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                ) : <h2 className='mt-5'>No product here</h2>
                        }
                    </div>
                    <div className='col-md-4'>
                        <ProductCartPrice />
                    </div></div>
            </div>
        </Layout>
    )
}
