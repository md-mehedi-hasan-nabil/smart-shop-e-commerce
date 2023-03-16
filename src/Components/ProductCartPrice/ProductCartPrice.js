import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { useOrderAddProductsMutation } from '../../features/order/orderApi';
import { resetCart } from '../../features/cart/cartSlice';

export default function ProductCartPrice() {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart);
  const { _id } = useSelector(state => state.auth.user) || {};
  const [orderAddProducts, { isSuccess: isSuccessOrder, isError: isErrorOrder, error: errorOrder, data: response }] = useOrderAddProductsMutation()

  useEffect(() => {
    if (isSuccessOrder) {
      swal("Good job!", "Your order place successfull.", "success");
      dispatch(resetCart())
    }
    if (isErrorOrder) {
      swal("Good job!", errorOrder?.message, "success");
      console.log(errorOrder)
    }
  }, [isSuccessOrder, dispatch, isErrorOrder, errorOrder])

  function totalPrice() {
    let sum = 0;
    if (cart?.length > 0) {
      sum = cart.reduce((accumulator, currentValue) => currentValue?.price * currentValue?.quantity + accumulator, 0)
    }
    return sum
  }

  function totalProductQuantity() {
    let quantity = 0
    if (cart?.length > 0) {
      quantity = cart.reduce((accumulator, currentValue) => currentValue?.quantity + accumulator, 0)
    }
    return quantity
  }

  function placeOrder() {
    cart?.length > 0 && _id &&
      dispatch(orderAddProducts({
        userId: _id,
        products: cart
      }))
  }

  function confirmPlaceOrder(callback) {
    swal({
      title: "Are you sure?",
      text: "Place Order Your Products",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          callback();
        }
      })
      .catch((error) => {
        swal(error.message);
      });
  }

  return (
    <div className='p-4 m-2 my-5 border'>
      <h3>Total price: {totalPrice()} $</h3>
      <h4>Product quantity: {totalProductQuantity()}</h4>
      <button onClick={() => confirmPlaceOrder(placeOrder)} className='btn btn-success'>Place Order</button>
    </div>
  )
}
