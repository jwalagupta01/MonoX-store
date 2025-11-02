import React from "react";
import "./ContactPage.css";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { assets } from "../../assets/frontend_assets/assets";
import NewslatterBox from "../NewsLatterBox/NewsLatterBox";

const ContactPage = () => {
  return (
    <div className="my-5">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <CollectionTitle txt1={"CONTACT"} txt2={"US"} />
        </div>
        <div className="contact_details d-flex justify-content-center align-items-center">
          <img src={assets.contact_img} className="rounded" alt="" />
          <div className="d-flex flex-column ms-4 mt-4">
            <h2 className="fw-semibold text-dark">Our Store</h2>
            <div className="contact_location mt-3 text-secondary fw-semibold">
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
            </div>
            <div className="contact_em_no mt-3 text-secondary fw-semibold">
              <p>Tel: (415) 555-0132</p>
              <p>Email: admin@monox.com</p>
            </div>
            <h2 className="fw-semibold">Careers at Forever</h2>
            <p className="text-secondary fw-semibold mt-3">
              Learn more about our teams and job openings.
            </p>
            <div>
              <button type="button" className="btn btn-outline-dark">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
        <div>
          <NewslatterBox />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
