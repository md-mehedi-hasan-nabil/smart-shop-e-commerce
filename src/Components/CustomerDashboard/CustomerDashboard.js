import React, { useEffect, useState } from 'react'
import CustomerDashboardLayout from '../CustomerDashboardLayout/CustomerDashboardLayout'
import { useGetUserByEmailQuery } from '../../features/auth/authApi'
import { useSelector } from 'react-redux'
import AddReview from '../AddReview/AddReview'
import { useDeleteOrderMutation } from '../../features/order/orderApi'
import swal from 'sweetalert'

export default function CustomerDashboard() {
    const { user } = useSelector(state => state.auth) || {}
    const [fetchUser, setFetchUser] = useState(true)
    const { data: userInfo, refetch } = useGetUserByEmailQuery(user?.email, {
        skip: fetchUser
    })
    const [deleteOrder, { isSuccess }] = useDeleteOrderMutation()

    useEffect(() => {
        if (user?.email) {
            setFetchUser(false)
        }
    }, [user?.email])

    useEffect(() => {
        if (isSuccess) {
            swal({
                title: "Good job!",
                text: "Order delete successful",
                icon: "success",
            });
            refetch()
        }
    }, [isSuccess, refetch])

    const { order: orders } = userInfo || {};


    function confirmDelete(orderId) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    if (orderId) {
                        deleteOrder(orderId)
                    }
                }
            })
            .catch((error) => {
                swal(error.message);
            });
    }

    return (
        <CustomerDashboardLayout>
            <div className='container mt-5'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="true">Orders</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Payment</button>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
                        <div className="accordion">
                            {
                                orders?.length > 0 ? orders.map((order, index) => <div key={order?._id + index} className='accordion'>
                                    <h6 className='mt-2'><span className="badge bg-secondary">{order.status}</span></h6>

                                    <div className="accordion-item my-1">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index + 1}`} aria-expanded="true" aria-controls={index + 1}>
                                                Order No.{index + 1}
                                            </button>
                                        </h2>

                                        <div id={index + 1} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <button className='btn btn-danger btn-sm ms-4  mt-3' onClick={() => confirmDelete(order._id)}>Cancel order</button>
                                            <div className="accordion-body">

                                                <div className='d-flex gap-3'>
                                                    {
                                                        order?.products?.length > 0 && order?.products?.map(pd => <div key={pd?._id} className="card position-relative">
                                                            <img src={pd.productImage} className="card-img-top w-50" alt="productImage" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{pd.productName}</h5>
                                                                <p className="card-text">{pd.productDesc}</p>
                                                                <span className='badge badge-light position-absolute top-0 end-0 bg-danger m-1'>{pd.quantity}</span>
                                                            </div>
                                                            <AddReview productId={pd._id} />
                                                        </div>)
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>) : <h4>No order found.</h4>
                            }
                        </div>
                    </div>

                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <h1>Upcoming Payment</h1>
                </div>
            </div>
        </CustomerDashboardLayout>
    )
}
