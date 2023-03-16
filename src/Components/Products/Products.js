import React from 'react';
import Loader from '../Loader/Loader';
import ProduuctCard from '../ProductCard/ProductCard';
import { useGetProductsQuery } from '../../features/products/productApi';
import { Link, useLocation } from 'react-router-dom';

const Products = () => {
    const location = useLocation()
    const { isLoading, isSuccess, data: products } = useGetProductsQuery()

    return (
        <div className='container py-5'>
            <div className='text-center'>
                <h2 className='fw-bold'>Our Products</h2>
                <p className='fw-light pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
            </div>
            {
                isLoading ? <Loader /> : (
                    <div className="row g-4 pt-5">
                        {
                            products?.map(product => <ProduuctCard key={product.id} product={product} />)
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