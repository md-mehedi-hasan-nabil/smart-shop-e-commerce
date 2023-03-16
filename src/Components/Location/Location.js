import React from "react";

const Location = () => {
  const URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.335855974336!2d90.40955253035762!3d23.735467403546092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1678532328729!5m2!1sen!2sbd";
  return (
    <>
      <div>
        <div className="bg-dark p-5 text-center text-white">
          <h2 className="fw-bold fs-1">
            <i className="fas fa-map-marker-alt d-text me-2"></i>Find Our
            Location
          </h2>
        </div>
        <iframe
          title="This is a unique title"
          src={URL}
          style={{ width: "100%", height: "80vh" }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
