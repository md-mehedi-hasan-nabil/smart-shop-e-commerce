import React, { useEffect, useState } from 'react'
import AdminDashboardLayout from '../../Components/AdminDashboardLayout/AdminDashboardLayout'
import { useMakeAdminMutation } from '../../features/auth/authApi'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'

export default function MakeAdmin() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [makeAdmin, { isSuccess: isSuccessMakeAdmin }] = useMakeAdminMutation()

    useEffect(() => {
        if (isSuccessMakeAdmin) {
            swal("Good job!", email + " admin create successfull.", "success");
            setEmail("")
        }
    }, [isSuccessMakeAdmin, email],)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(makeAdmin(email))
    }

    return (
        <AdminDashboardLayout>
            <div className='container'>
                <form onSubmit={handleSubmit} className='p-5'>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder='Email' />
                    </div>
                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                </form>
            </div>
        </AdminDashboardLayout>
    )
}
