import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';

export default function CustomerPrivateRoute({ children }) {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true)

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthChecked(true)
        setLoading(false)
      } else {
        setAuthChecked(false)
        setLoading(false)
      }
    });
  }, [auth])

  if (loading) {
    return <Loader />
  }
  return authChecked ? children : <Navigate to="/login" />;
}
