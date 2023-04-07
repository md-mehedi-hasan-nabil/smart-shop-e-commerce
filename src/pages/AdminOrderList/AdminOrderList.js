import React, { useEffect } from 'react'
import DashboardLayout from '../../Components/AdminDashboardLayout/AdminDashboardLayout'
import { useGetUsersQuery } from '../../features/auth/authApi'
import { useUpdateOrderStatusMutation } from '../../features/order/orderApi'
import swal from 'sweetalert'

export default function AdminOrderList() {
  const { isSuccess: isOrdersSuccess, data: orders , refetch} = useGetUsersQuery()
  const [updateOrderStatus, { isSuccess }] = useUpdateOrderStatusMutation()

  useEffect(() => {
    if (isSuccess) {
      swal({
        title: "Good job!",
        text: "Status Changed successful.",
        icon: "success",
      });
      refetch()
    }
  }, [isSuccess, refetch])

  // orders?.length > 0 && console.log(orders)

  function handleStatusChange(status, orderId) {
    updateOrderStatus({
      orderId,
      status
    })
  }

  return (
    <DashboardLayout>
      <div className='container py-3'>
        <div className="accordion">
          {
            isOrdersSuccess && orders?.length > 0 && orders.map((order, index) => order?.order?.length > 0 && <div key={order?._id} className="accordion-item">

              <h2 className="accordion-header" id={order?._id + index + 1}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${order._id}`} aria-expanded="true" aria-controls={order._id}>
                  <div className='d-flex align-items-center gap-3 position-relative'>
                    <img className='rounded-circle' style={{ width: "3rem", height: "3rem" }} src={order?.photoURL} alt="avatar" />
                    <div>
                      <p className='m-0'>
                        {order?.displayName}
                      </p><p className='m-0'>
                        {order?.email}
                      </p>
                      <span className='badge badge-light position-absolute top-0 end-0 bg-primary text-white'>{order?.order?.filter(product => product.status === "pending")?.length}</span>
                    </div>
                  </div>
                </button>
              </h2>
              <div id={order._id} className="accordion-collapse collapse" aria-labelledby={order?._id + index + 1} data-bs-parent="#accordionExample">
                <div className="accordion-body">

                  {order?.order?.length > 0 ? order?.order?.map((item, index) => item.status === "pending" ? <div key={order?._id + index} className='accordion'>
                    {/* {console.log(item.status)} */}
                    <div className="accordion-item my-1">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index + 1}`} aria-expanded="true" aria-controls={index + 1}>
                          Order No.{index + 1}
                        </button>
                      </h2>
                      <div id={index + 1} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                        <div className="accordion-body">
                          <select defaultValue={item.status} onChange={e => handleStatusChange(e.target.value, item._id)} style={{ width: "auto" }} className="form-select mb-3" aria-label="Default select example">
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                          </select>
                          <div className='d-flex gap-3'>
                            {
                              item?.products?.length > 0 && item?.products?.map(pd => <div key={pd?._id} className="card position-relative">
                                <img src={pd.productImage} className="card-img-top w-50" alt="productImage" />
                                <div className="card-body">
                                  <h5 className="card-title">{pd.productName}</h5>
                                  <p className="card-text">{pd.productDesc}</p>
                                  <span className='badge badge-light position-absolute top-0 end-0 bg-danger m-1'>{pd.quantity}</span>
                                </div>
                              </div>)
                            }
                          </div>

                        </div>
                      </div>
                    </div>
                  </div> : <h4>Order is done</h4>) : <h4>No order</h4>}
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </DashboardLayout>
  )
}
