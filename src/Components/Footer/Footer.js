import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark p-5 text-white">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="">
                <h2 className="fw-bold">About us</h2>
                <p className="fw-light pt-4">
                  Ut enim ad minim veniam perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <h2 className="fw-bold">Get in Touch</h2>
                <ul className="pt-4 fw-light">
                  <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                  <li>support@fruitkha.com</li>
                  <li>+00 111 222 3333</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <h2 className="fw-bold">Pages</h2>
                <div className="fw-light pt-4">
                  <p>Home</p>
                  <p>About</p>
                  <p>News</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <h2 className="fw-bold">Subscribe</h2>
                <p className="fw-light pt-4">
                  Subscribe to our mailing list to get the latest updates.
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border border-0"
                    placeholder="e-mail"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn d-btn"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fas fa-paper-plane text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
