import React, { Fragment } from "react";
import img from "../../images/feature-bg.jpg";

const WhyUs = () => {
  return (
    <>
      <div className="container py-4">
        <h2 className="fw-bold text-center py-5">Why <span className="d-text">Smart Shop</span></h2>
        <div className="row g-4 d-flex justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card text-center border border-0">
                  <div className="card-body">
                    <p>
                      <i className="fas fa-shipping-fast fa-3x d-text"></i>
                    </p>
                    <h4 className="fw-bold">Home Delivery</h4>
                    <p className="fw-light pt-3">
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center border border-0">
                  <div className="card-body">
                    <p>
                      <i className="fas fa-money-bill-alt fa-3x d-text"></i>
                    </p>
                    <h4 className="fw-bold">Best Price</h4>
                    <p className="fw-light pt-3">
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center border border-0">
                  <div className="card-body">
                    <p>
                      <i className="fas fa-briefcase fa-3x d-text"></i>
                    </p>
                    <h4 className="fw-bold">Custom Box</h4>
                    <p className="fw-light pt-3">
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center border border-0">
                  <div className="card-body">
                    <p>
                      <i className="fas fa-sync-alt fa-3x d-text"></i>
                    </p>
                    <h4 className="fw-bold">Quick Refund</h4>
                    <p className="fw-light pt-3">
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
