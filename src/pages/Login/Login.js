import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import google from "../../images/google.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";
import swal from "sweetalert";
import logo from "../../images/logo-light.svg"

const Login = () => {
  const dispatch = useDispatch()
  const [register, { isSuccess }] = useRegisterMutation()
  const provider = new GoogleAuthProvider();
  initializeApp(firebaseConfig);
  const auth = getAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      swal("Good job!", "Login successfull", "success");
      navigate("/")
    }
  }, [isSuccess, navigate])


  function singInGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        const { accessToken, displayName, email, emailVerified, photoURL } = result.user;
        // console.log({ accessToken, displayName, email, emailVerified, photoURL })

        if (displayName && email && photoURL) {
          register({
            displayName, email, photoURL
          })
        }

        dispatch(userLoggedIn({
          accessToken,
          user: {
            displayName, email, emailVerified, photoURL
          }
        }))

        navigate("/")
      
      }).catch((error) => {
        // const errorMessage = error.message;
        console.error(error)
      });

  };


  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-5">
            <div className="card p-4">
              <div className="text-center">
                <Link to="/">
                  <img className="my-3" src={logo} alt="logo" />
                </Link>
                <h3>Welcome to Login</h3>
                <img src="" alt="" />
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
                  <button className="btn btn-dark mt-4 w-100 fw-bold fs-5">
                    Login
                  </button>
                </div>
                <p className="text-center pt-2">or</p>
                <div>
                  <button className="btn btn-outline-dark w-100" onClick={singInGoogle}>
                    <img src={google} alt="" style={{ width: "1.8rem" }} />{" "}
                    SignIn with google
                  </button>
                </div>
                <p className="text-center pt-4">
                  Haven't an account?{" "}
                  <Link
                    className="text-decoration-none d-text fw-bold"
                    to="/register"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
