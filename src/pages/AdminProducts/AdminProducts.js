import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../Components/AdminDashboardLayout/AdminDashboardLayout'
import swal from 'sweetalert'
import AdminProductActionBar from '../../Components/AdminProductActionBar/AdminProductActionBar'
import ProductModal from '../../Components/ProductModal/ProductModal'


export default function AdminProducts() {
    const [allProducts, setAllProducts] = useState([])
    const [refetch, setRefetch] = useState(true)
    const [products, setProducts] = useState({
        review: [],
        star: 0
    })

    useEffect(() => {
        refetch && fetchAllProducts()
        setRefetch(false)
        console.log("refetch")
    }, [refetch])

    function fetchAllProducts() {
        fetch(`${process.env.REACT_APP_API_URL}/api/product`)
            .then(res => res.json()
                .then(data => {
                    setAllProducts(data)
                }))
    }

    function handleChange(e) {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    function handleAddProduct(e) {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/api/product/`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(products)
        }).then(res => res.json())
            .then(data => {
                if (data?.success) {
                    swal("Success", data?.success?.message, "success")
                    fetchAllProducts()
                    e.target.reset()
                }
            })
            .catch(err => {
                console.error(err)
                swal("Oops", err?.message, "error")
            })

    }
    return (
        <DashboardLayout>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
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
                            <AdminProductActionBar refetch={setRefetch} product={product} />
                        </tr>)
                    }

                </tbody>

            </table>
            <div className='position-absolute bottom-0 end-0 m-4' >
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn btn-primary rounded-circle' style={{ width: '4rem', height: "4rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
                        <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                        <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </button>
            </div>

            <ProductModal actionTitle="Add Product" modalId="staticBackdrop" stateChange={handleChange} onSubmit={handleAddProduct} state={products} />

        </DashboardLayout>
    )
}
