import React, { useEffect, useState } from 'react'
import { useAddProductReviewMutation } from '../../features/products/productApi';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

export default function AddReview({ productId }) {
    const { user } = useSelector(state => state.auth) || {}

    const [addProductReview, { isSuccess }] = useAddProductReviewMutation()
    const [review, setReview] = useState("")

    useEffect(() => {
        if (isSuccess) {
            swal({
                title: "Good job!",
                text: "Review add successfull",
                icon: "success",
            });
            setReview("")
        }
    }, [isSuccess])

    function handleReview(e) {
        e.preventDefault();
        if (user?._id && productId) {
            addProductReview({
                userId: user?._id,
                productId,
                message: review
            })


        } console.log({
            userId: user._id,
            productId,
            message: review
        })
    }

    return (
        <form onSubmit={handleReview}>
            <div className="mb-3 d-flex px-4">
                <input type="text" className="form-control" id="review" name="review" value={review} onChange={e => setReview(e.target.value)} placeholder="Add review" />
                <button className='btn btn-danger' type="submit">Review</button>
            </div>
        </form>
    )
}
