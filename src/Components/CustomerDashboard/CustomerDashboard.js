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

    const { order } = userInfo || {};


    return (
        <CustomerDashboardLayout>
            <div className='container mt-5'>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="true">Orders</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Review</button>
                    </li>
                    {/* <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li> */}
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
                        <div>
                            {
                                order?.length > 0 ? "" : <h4>No order found.</h4>
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        review
                    </div>
                    {/* <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div> */}

                </div>
            </div>
        </CustomerDashboardLayout>
    )
}
