import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/google.png";

const Register = () => {
  return (
    <>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-5">
              <div className="card p-4">
                <div className="text-center">
                  <h3>Welcome to Signup</h3>
                </div>
                <div className="card-body">
                  <span className="fs-5 d-block pb-1">Username or Email</span>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <span className="fs-5 d-block pb-1">Password</span>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <span className="fs-5 d-block pb-1">Confirm Password</span>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div>
                    <button className="btn btn-dark mt-5 w-100 fw-bold fs-5">
                      Signup
                    </button>
                  </div>
                  <p className="text-center pt-2">or</p>
                  <div>
                    <button className="btn btn-outline-dark mt-2 w-100 fw-light">
                      <span className="me-3">
                        <img src={google} alt="" style={{ width: "1.8rem" }}/>
                      </span>
                      SignUp with google
                    </button>
                  </div>
                  <p className="text-center pt-4">
                    Already have an account?{" "}
                    <Link className="fw-bold text-decoration-none d-text" to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Register;
