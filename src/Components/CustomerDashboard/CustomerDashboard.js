import React, { useEffect, useState } from 'react'
import CustomerDashboardLayout from '../CustomerDashboardLayout/CustomerDashboardLayout'
import { useGetUserByEmailQuery } from '../../features/auth/authApi'
import { useSelector } from 'react-redux'

export default function CustomerDashboard() {
    const { user } = useSelector(state => state.auth) || {}
    const [fetchUser, setFetchUser] = useState(true)
    const { isSuccess, data: userInfo } = useGetUserByEmailQuery(user?.email, {
        skip: fetchUser
    })

    useEffect(() => {
        if (user?.email) {
            setFetchUser(false)
        }
    }, [user?.email])

    console.log(userInfo)

    const { order: orders } = userInfo || {};


    return (
        <CustomerDashboardLayout>
            <div className='container mt-5'>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="true">Orders</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
                        <div className="accordion">
                            {
                                orders?.length > 0 ? orders.map((order, index) => <div key={order?._id + index} className='accordion'>

                                    <div class="accordion-item my-1">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index + 1}`} aria-expanded="true" aria-controls={index + 1}>
                                                Order No.{index + 1}
                                            </button>
                                        </h2>
                                        <div id={index + 1} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div className='d-flex gap-3'>
                                                    {
                                                        order?.products?.length > 0 && order?.products?.map(pd => <div key={pd?._id} class="card position-relative">
                                                            <img src={pd.productImage} class="card-img-top w-50" alt="productImage" />
                                                            <div class="card-body">
                                                                <h5 class="card-title">{pd.productName}</h5>
                                                                <p class="card-text">{pd.productDesc}</p>
                                                                <span className='badge badge-light position-absolute top-0 end-0 bg-danger m-1'>{pd.quantity}</span>
                                                            </div>
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
            </div>
        </CustomerDashboardLayout>
    )
}
