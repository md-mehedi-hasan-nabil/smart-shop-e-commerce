import React from 'react'

export default function ProductModal({ refetch, onSubmit, stateChange, modalId, state, actionTitle }) {
    const { productName, productDesc, productImage, country, price } = state || {}

  

    return (
        <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form onSubmit={onSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input type="text" className="form-control" onChange={e => stateChange(e)} name="productName" placeholder=""
                                    value={productName}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product Description</label>
                                <input type="text" className="form-control" onChange={e => stateChange(e)} name="productDesc" placeholder="" value={productDesc} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product Image</label>
                                <input type="url" className="form-control" onChange={e => stateChange(e)} name="productImage" placeholder="" value={productImage} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input type="number" min="0" className="form-control" onChange={e => stateChange(e)} name="price" value={price} placeholder="" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Country</label>
                                <input type="text" className="form-control" onChange={e => stateChange(e)} name="country" value={country} placeholder="" required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">
                                {actionTitle ? actionTitle : "submit"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
