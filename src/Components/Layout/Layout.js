import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../features/auth/authSlice';
import { useGetUserByEmailQuery } from '../../features/auth/authApi';

export default function Layout({ children }) {
    const dispatch = useDispatch()
    const [fetchUser, setFetchUser] = useState(true)
    const [email, setEmail] = useState("")
    const { isSuccess: isSuccessFetchUser, data: userInfo } = useGetUserByEmailQuery(email, {
        skip: fetchUser
    })

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

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
    }, [auth, dispatch])

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
