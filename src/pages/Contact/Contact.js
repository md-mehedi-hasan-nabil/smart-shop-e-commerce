import React from "react";
import Layout from "../../Components/Layout/Layout";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Location from "../../Components/Location/Location";
import Sponser from "../../Components/Sponser/Sponser";

const Contact = () => {
  return (
    <Layout>
      <ContactSection />
      <Location />
      <Sponser />
    </Layout>
  );
};

export default Contact;
