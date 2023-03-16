import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import firebaseConfig from '../../firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { userLoggedIn } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useGetUserByEmailQuery } from '../../features/auth/authApi'

export default function AdminDashboardLayout({ children }) {
  const dispatch = useDispatch()
  const [fetchUser, setFetchUser] = useState(true)
  const [email, setEmail] = useState("")
  const { isSuccess: isSuccessFetchUser, data: userInfo } = useGetUserByEmailQuery(email, {
    skip: fetchUser
  })

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email } = user || {};
        setEmail(email)
        setFetchUser(false)
      } else {
        console.log('No user');
      }
    });
  }, [auth])

  useEffect(() => {
    if (isSuccessFetchUser) {
      dispatch(userLoggedIn({
        user: {
          ...userInfo,
          isLoggedIn: true
        }
      }))
    }
  }, [isSuccessFetchUser, userInfo, dispatch])



  return (
    <main className='position-relative container-fluid vh-100 d-flex'>
      <Sidebar />
      <div className='w-100'>

        <form className='py-1 text-end shadow'>
          <input type="search" placeholder='Search...' className="form-control w-25 m-2 d-inline" />
        </form>

        <div>
          {children}
        </div>

      </div>
    </main>
  )
}
