import React from "react";
import zuriMobile from "../../assets/zuri_logo Mobile.png";
import zuri from "../../assets/Zuri.Internship_Logo.png";
import i4gMobile from "../../assets/I4G Mobile.png";
import i4g from "../../assets/I4G.png";
const Footer = () => {
  return (
    <section className="footer container">
      <div className=" zuri-footer">
        <div className="d-lg-none">
          <div className="row">
            <img src={zuriMobile} alt="zuri logo" className="zuri-logo col-6" />
          </div>
          <div className="row">
            <p className="zuri-logo-title"> HNG Internship 9 Frontend Task</p>
          </div>
          <div className="row">
            <img src={i4gMobile} alt="i4g logo" className="col-6" />
          </div>
        </div>

        {/* FOR WEB VIEW */}
        <div className="d-none d-lg-inline-block w-100">
          <div className="row ">
            <img
              src={zuri}
              alt="zuri logo"
              className="zuri-logo col-3  img-fluid float-start "
            />

            <p className="zuri-logo-title col-6 align-self-center">
              HNG Internship 9 Frontend Task
            </p>

            <img
              src={i4g}
              alt="i4g logo"
              className="col-3  img-fluid float-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
