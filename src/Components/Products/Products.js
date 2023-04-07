import React, { useEffect } from 'react';
import Loader from '../Loader/Loader';
import ProduuctCard from '../ProductCard/ProductCard';
import { useGetProductsQuery } from '../../features/products/productApi';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../../features/products/productSlice';

const Products = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { isLoading, isSuccess, data: products, refetch } = useGetProductsQuery()
    const { category: filterKeyword } = useSelector(state => state.product)

    useEffect(() => {
        refetch()
    }, [refetch])

    return (
        <div className='container py-5'>
            <div className='text-center'>
                <h2 className='fw-bold'>Our Products</h2>
                <p className='fw-light pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
            </div>
            <div className="d-flex justify-content-center items-center gap-2 my-3">
                {filterKeyword && (
                    <span>
                        {filterKeyword}
                    </span>
                )}
                {filterKeyword !== "" && (
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(filterByCategory(""))}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="fill-slate-600 dark:fill-slate-100 bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                )}
            </div>
            {
                isLoading ? <Loader /> : (
                    <div className="row g-4 pt-5">
                        {
                            isSuccess && products?.length > 0 ? products
                                ?.filter((product) => product?.category?.includes(filterKeyword))
                                ?.map(product => <ProduuctCard key={product.id} product={product} />)
                                : <h2>No Product</h2>
                        }
                    </div>
                )
            }
            {
                location.pathname === "/" && <p className='p-3 text-center fs-5'>
                    <Link to="/all-products">
                        See all products
                    </Link>
                </p>
            }

        </div>
    );
};

export default Products;