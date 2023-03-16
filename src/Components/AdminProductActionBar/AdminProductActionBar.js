import React, { useState } from 'react'
import ProductModal from '../ProductModal/ProductModal'
import swal from 'sweetalert';

export default function AdminProductActionBar({ refetch, product }) {
  const [productInfo, setProductInfo] = useState(product)

  function handleChange(e) {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value
    })
  }

  function confirmDelete(callback) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record",
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

  function deleteProduct() {

    fetch(`${process.env.REACT_APP_API_URL}/api/product/${product._id}`, {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "DELETE",
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.success) {
          swal("Success", data?.success?.message, "success")
          refetch(true)
        }
      })
      .catch(err => {
        console.error(err)
        swal("Oops", err?.message, "error")
      })
  }

  function updateProduct(e) {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/api/product/${product._id}`, {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "PATCH",
      body: JSON.stringify(productInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.success) {
          swal("Success", data?.success?.message, "success")
          refetch(true)
          // e.target.reset()
        }
      })
      .catch(err => {
        console.error(err)
        swal("Oops", err?.message, "error")
      })

  }

  return (
    <td>
      <div className='d-flex gap-2'>
        <button data-bs-toggle="modal" data-bs-target={`#${product._id}`} className='btn btn-sm'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </button>

        <button onClick={()=> confirmDelete(deleteProduct)} className='btn btn-outline-danger btn-sm'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </button>
        {<ProductModal refetch={refetch} actionTitle="Update Product" modalId={product._id} stateChange={handleChange} onSubmit={updateProduct} state={productInfo} />}
      </div>


    </td>
  )
}
