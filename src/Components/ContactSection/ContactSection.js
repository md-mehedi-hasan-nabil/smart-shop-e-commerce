import React from 'react';

const ContactSection = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row g-4 d-flex justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div>
                            <h2 className="fw-bold">Have you any <span className="d-text">question?</span></h2>
                            <p className="fw-light pt-2 pb-4">Leave your message here...</p>
                        </div>
                        <div>
                        <div className="w-100 mb-3 d-flex">
                            <div className="w-50 me-4">
                                <input
                                type="text"
                                className="form-control rounded-0"
                                placeholder="Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="w-50">
                                <input
                                type="email"
                                className="form-control rounded-0"
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div className="w-100 mb-3 d-flex">
                            <div className="w-50 me-4">
                                <input
                                type="text"
                                className="form-control rounded-0"
                                placeholder="Phone"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="w-50">
                                <input
                                type="text"
                                className="form-control rounded-0"
                                placeholder="Subject"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div className="">
                            <textarea className="form-control rounded-0" rows={10} placeholder="Leave your message here" id="floatingTextarea2"></textarea>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5 bg-light p-5">
                        <div className="py-3">
                            <h4 className="fw-bold py-2">Shop Address</h4>
                            <span className="d-block fw-light">34/8, East Motijheel</span>
                            <span className="d-block fw-light">Dhaka, Bangladesh</span>
                        </div>
                        <div className="py-3">
                            <h4 className="fw-bold py-2">Shop Hours</h4>
                            <span className="d-block fw-light">SAT - SUN: 10 to 8 PM</span>
                            <span className="d-block fw-light">MON - FRIDAY: 8 to 9 PM</span>
                        </div>
                        <div className="py-3">
                            <h4 className="fw-bold py-2">Contact</h4>
                            <span className="d-block fw-light">Phone: +00 111 222 3333</span>
                            <span className="d-block fw-light">Email: support@fruitkha.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSection;