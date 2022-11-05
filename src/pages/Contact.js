import React from "react";
import ContactForm from "../Components/ContactForm/contactForm";
import ContactIntro from "../Components/ContactIntro/ContactIntro";
const Contact = () => {
  return (
    <section className="contact">
      <ContactIntro />
      <ContactForm />
    </section>
  );
};

export default Contact;
