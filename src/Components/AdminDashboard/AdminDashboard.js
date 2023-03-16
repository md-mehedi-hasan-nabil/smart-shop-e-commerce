import React, { useEffect, useState } from 'react'
import DashboardLayout from '../AdminDashboardLayout/AdminDashboardLayout'
import { useGetUsersQuery } from '../../features/auth/authApi'
import { useGetProductsQuery } from '../../features/products/productApi'
import { useGetOrderProductsQuery } from '../../features/order/orderApi'

export default function AdminDashboard() {
  const [allProducts, setAllProducts] = useState([])
  const { isLoading: isUsersLoading, isSuccess: isUsersSuccess, data: users } = useGetUsersQuery()
  const { isLoading: isProductsLoading, isSuccess: isProductsSuccess, data: products } = useGetProductsQuery()
  const { isLoading: isOrdersLoading, isSuccess: isOrdersSuccess, data: orders } = useGetOrderProductsQuery()

  useEffect(() => {
    fetchAllProducts()
  }, [])

  function fetchAllProducts() {
    fetch(`${process.env.REACT_APP_API_URL}/api/product`)
      .then(res => res.json()
        .then(data => {
          setAllProducts(data)
        }))
  }
  return (
    <DashboardLayout>
      <div className='row'>
        <div className='col-md-6'>
          <div className='bg-warning p-4 m-3 rounded text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            </svg>
            <h3>Users</h3>
            <h2>
              {
                !isUsersLoading && isUsersSuccess ? users?.length : 0
              }</h2>
          </div>

        </div>
        <div className='col-md-6'>
          <div className='bg-secondary text-white p-4 m-3 rounded text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <h2>Products</h2>
            <h2>
              {
                !isProductsLoading && isProductsSuccess ? products?.length : 0
              }
            </h2>
          </div>

        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='bg-primary text-white p-4 m-3 rounded text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <h3>Orders</h3>
            <h2>
              {
                !isOrdersLoading && isOrdersSuccess ? orders?.length : 0
              }
            </h2>
          </div>

        </div>
      </div>


      <h2>Recent Products</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {
            allProducts?.length > 0 && allProducts.map((product, index) => <tr key={product._id}>
              <td>{index + 1}</td>
              <td style={{ width: "2rem" }}><img className='w-100' src={product.productImage} alt="" /></td>
              <td>{product.productName}</td>
              <td>{product.productDesc}</td>
              <td>{product.price}</td>
            </tr>)
          }

        </tbody>
      </table>
    </DashboardLayout>
  )
}
