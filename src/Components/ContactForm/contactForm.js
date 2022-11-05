import React from "react";
import { Formik } from "formik";

const ContactForm = () => {
  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    message: "",
    consentCheck: false,
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.first_name) {
      errors.first_name = "First Name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required";
    }
    if (!values.message) {
      errors.message = "Please enter a message";
    }

    return errors;
  };
  

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      
    >
      {(formik) => {
        const {
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <section>
            <form className="row g-4" action="https://formsubmit.co/tryraisins@gmail.com" method="POST">
              <div className="col-12 col-md-6">
                <label htmlFor="first_name" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.first_name && touched.first_name
                      ? "input-error"
                      : null
                  }`}
                  id="first_name"
                  placeholder="Enter your first name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.first_name && touched.first_name && (
                  <span className="error">{errors.first_name}</span>
                )}
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="last_name" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.last_name && touched.last_name ? "input-error" : null
                  }`}
                  id="last_name"
                  placeholder="Enter your last name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.last_name && touched.last_name && (
                  <span className="error">{errors.last_name}</span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    errors.email && touched.email ? "input-error" : null
                  }`}
                  id="email"
                  placeholder="yourname@email.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
                <div id="emailHelp" className="form-text">
                  This is a hint text to help user.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control ${
                    errors.message && touched.message ? "input-error" : null
                  }`}
                  id="message"
                  rows="3"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {errors.message && touched.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="consentCheck"
                    className={`form-check-input ${
                      dirty && isValid ? "" : "disabled-btn"
                    }`}
                    disabled={!(dirty && isValid)}
                    value={values.consentCheck}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label className="form-check-label" htmlFor="consentCheck">
                    You agree to providing your data to TryRaisins who may
                    contact you.
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  id="btn__submit"
                  className={`btn btn-primary ${
                    dirty && isValid ? "" : "disabled-btn"
                  }`}
                  disabled={!(dirty && isValid && values.consentCheck)}
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
