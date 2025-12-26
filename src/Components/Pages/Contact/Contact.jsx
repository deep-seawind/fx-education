import React from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <Breadcrumbs paths={["Home", "Company", "Contact Us"]} />

      <div className="py-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
