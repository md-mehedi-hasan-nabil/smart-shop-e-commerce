import React from 'react'
import AdminDashboard from '../../Components/AdminDashboard/AdminDashboard'
import CustomerDashboard from '../../Components/CustomerDashboard/CustomerDashboard'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const { user } = useSelector(state => state.auth) || {}
  return (
    <> {
      user?.role === "admin" ?
        <AdminDashboard /> :
        <CustomerDashboard />
    }
    </>
  )
}
