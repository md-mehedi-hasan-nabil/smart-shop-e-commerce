import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/logo-light.svg"

export default function Sidebar() {
    return (
        <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100" style={{ width: '280px', height: '100vh' }}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">
                    <img src={logo} alt="logo" />
                </span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <NavLink to="/" className={({ isActive, isPending }) => isActive ? "nav-link active" : "nav-link link-dark"}>
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                        Home
                    </NavLink>
                </li>
                <li>

                    <NavLink to="/dashboard" className={({ isActive, isPending }) => isActive ? "nav-link active" : "nav-link link-dark"}>
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" className={({ isActive, isPending }) => isActive ? "nav-link active" : "nav-link link-dark"}>
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive, isPending }) => isActive ? "nav-link active" : "nav-link link-dark"}>
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/make-admin" className={({ isActive, isPending }) => isActive ? "nav-link active" : "nav-link link-dark"}>
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
                        Make Admin
                    </NavLink>
                </li>
            </ul>
            <hr />
        </aside>
    )

}