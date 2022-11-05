import React from "react";
import { Link } from "react-router-dom";
const ContactButton = () => {
  return (
    <div>
      <Link to="/contact" id="contact">
        <p className="rounded link-button"> Contact Me</p>
      </Link>
    </div>
  );
};

export default ContactButton;
