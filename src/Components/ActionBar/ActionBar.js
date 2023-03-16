import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, addToCart, removeQuantity } from '../../features/cart/cartSlice';

export default function ActionBar({product, productId}) {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)


    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        if (cart?.length > 0) {
            const productExisting = cart.filter(product => product._id === productId)
            if (productExisting?.length > 0) {
                setDisableButton(true)
            }
        }
    }, [cart, productId])

    function addProductToCart() {
        dispatch(addToCart(product))
    }

    function addProductQuantity(id) {
        id && dispatch(addQuantity(id))
    }

    function removeProductQuantity(id) {
        id && dispatch(removeQuantity(id))
    }

    return (
        <>
            <button disabled={!disableButton} onClick={() => addProductQuantity(productId)} className="btn d-btn text-white w-100"><i className="fas fa-shopping-cart me-2"></i>+</button>
            <button disabled={disableButton} onClick={addProductToCart} className="btn d-btn text-white w-100"><i className="fas fa-shopping-cart me-2"></i>Add To Cart</button>
            <button disabled={!disableButton} onClick={() => removeProductQuantity(productId)} className="btn d-btn text-white w-100"><i className="fas fa-shopping-cart me-2"></i>-</button>
        </>
    )
}
