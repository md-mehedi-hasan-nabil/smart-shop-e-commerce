import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userLoggedOut } from "../../features/auth/authSlice";

const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { cart } = useSelector(state => state.cart)
  const auth = getAuth();

  const { photoURL } = user || {}

  function Logout() {
    signOut(auth).then(() => {
      dispatch(userLoggedOut())
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-3" style={{ backdropFilter: "blur(10px)" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 d-color" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <NavLink className={({ isActive, isPending }) => isActive ? "nav-link link-color d-color" : "nav-link link-color"} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive, isPending }) => isActive ? "nav-link link-color d-color" : "nav-link link-color"} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive, isPending }) => isActive ? "nav-link link-color d-color" : "nav-link link-color"} to="/news">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive, isPending }) => isActive ? "nav-link link-color d-color" : "nav-link link-color"} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive, isPending }) => isActive ? "nav-link link-color d-color" : "nav-link link-color"} to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              {user ? <>
                <li className="nav-item dropdown">
                  <img src={photoURL} style={{ cursor: "pointer", width: '3rem' }} className="nav-link rounded-circle dropdown-toggle" data-bs-toggle="dropdown" alt="profile" />

                  <ul className="dropdown-menu">
                    <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                    <li><button className="dropdown-item" onClick={Logout}>Logout</button></li>
                  </ul>
                </li>
                <Link to="/cart-details" className="position-relative text-light nav-item d-flex justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <div className="badge badge-light position-absolute top-0 end-0 bg-danger" style={{ fontSize: "0.8rem" }}>{
                    cart?.length
                  }
                  </div>
                </Link>
              </> :
                <>
                  <li className="nav-item">
                    <Link className="nav-link link-color" to="/login">
                      Login
                    </Link>
                  </li>
                </>}

            </ul>
            {location.pathname === "/all-products" && <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn d-outline-btn text-white" type="submit">
                Search
              </button>
            </form>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
