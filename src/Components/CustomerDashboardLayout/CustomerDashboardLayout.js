import React, { useEffect, useState } from 'react'
import logo from '../../images/logo-light.svg'
import firebaseConfig from '../../firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { userLoggedIn } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useGetUserByEmailQuery } from '../../features/auth/authApi'
import { Link } from 'react-router-dom'

export default function CustomerDashboardLayout({ children }) {
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
    <main className='position-relative container-fluid vh-100'>
      {/* <Sidebar /> */}
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>


        <div>
          {children}
        </div>

      </>
    </main>
  )
}
