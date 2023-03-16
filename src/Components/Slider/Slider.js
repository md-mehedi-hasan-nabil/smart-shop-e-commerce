import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <section className="text-center">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="background background-img1 d-flex justify-content-center align-items-center">
                <div>
                  <div>
                    <p className="fw-bold fs-4 d-color">Fresh and Organic</p>
                    <h1 className="fw-bold text-white display-1">
                      Delicious Seasonal Fruits
                    </h1>
                    <div className="pt-3">
                      <button className="d-btn px-3 py-2 btn btn-dark rounded-5 me-2">
                        Fruit Collection
                      </button>
                      <button className="btn px-3 py-2 d-outline-btn rounded-5 text-white">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="background background-img2 d-flex justify-content-center align-items-center">
                <div>
                <div>
                    <p className="fw-bold fs-4 d-color">Fresh and Organic</p>
                    <h1 className="fw-bold text-white display-1">
                      Delicious Seasonal Fruits
                    </h1>
                    <div className="pt-3">
                      <button className="d-btn px-3 py-2 btn btn-dark rounded-5 me-2">
                        Fruit Collection
                      </button>
                      <button className="btn px-3 py-2 d-outline-btn rounded-5 text-white">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="background background-img3 d-flex justify-content-center align-items-center">
                <div>
                <div>
                    <p className="fw-bold fs-4 d-color">Fresh and Organic</p>
                    <h1 className="fw-bold text-white display-1">
                      Delicious Seasonal Fruits
                    </h1>
                    <div className="pt-3">
                      <button className="d-btn px-3 py-2 btn btn-dark rounded-5 me-2">
                        Fruit Collection
                      </button>
                      <button className="btn px-3 py-2 d-outline-btn rounded-5 text-white">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Slider;
