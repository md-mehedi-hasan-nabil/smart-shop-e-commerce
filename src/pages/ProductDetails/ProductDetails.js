import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../features/products/productApi';
import Loader from '../../Components/Loader/Loader';
import ProductCartPrice from '../../Components/ProductCartPrice/ProductCartPrice';
import ActionBar from '../../Components/ActionBar/ActionBar';

export default function ProductDetails() {
    let { productId } = useParams();
    const [fetchProduct, setFetchProduct] = useState(true)

    const { isLoading, isSuccess, data: product } = useGetProductByIdQuery(productId, {
        skip: fetchProduct
    });

    const { price, productDesc, productImage, productName } = product || {};

    useEffect(() => {
        if (productId) {
            setFetchProduct(false)
        }
    }, [productId])

    let content = ""

    if (isLoading) {
        content = <Loader />
    } else if (!isLoading && isSuccess && product) {
        content =
            <div className='col-md-6 col-lg-8'>
                <div className="my-5 d-flex gap-3">
                    <img src={productImage} className="w-50 card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{productName}
                        </h5>
                        <p className="card-text fw-light py-2">{productDesc}</p>
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
                        <div className='d-flex gap-1'>
                            <ActionBar productId={product._id} product={product} />
                        </div>
                    </div>
                </div>
            </div>
    }



    return (
        <Layout>
            <div className='container d-flex'>
                {content}
                <ProductCartPrice />
            </div>
        </Layout>
    )
}
