import React from "react";
import "./AboutWhy.css";
import AboutWhy from "./AboutWhy";
import {
  MdOutlineWorkspacePremium,
  MdSupportAgent,
  MdOutlineRecycling,
} from "react-icons/md";
import { GrCurrency, GrUpdate } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSolidOffer } from "react-icons/bi";

const AboutMainWhy = () => {
  return (
    <div>
      <div className="d-flex my-4">
        <h3>Why MonoX </h3>
        <div
          className="bg-dark mt-3"
          style={{ width: "40px", height: "2px" }}
        ></div>
      </div>
      <div className="main_why_div d-grid">
        <AboutWhy
          icon={<MdOutlineWorkspacePremium />}
          tittle={"Premium quality clothing with modern designs"}
        />
        <AboutWhy
          tittle={"Wide range of styles for men and women"}
          icon={<GrCurrency />}
        />
        <AboutWhy
          tittle={"Smooth and secure online shopping experience"}
          icon={<RiSecurePaymentLine />}
        />
        <AboutWhy
          icon={<LiaShippingFastSolid />}
          tittle={"Fast and reliable delivery service"}
        />
        <AboutWhy tittle={"24/7 customer support"} icon={<MdSupportAgent />} />
        <AboutWhy
          tittle={"Subscribe now and get 20% off on every product"}
          icon={<BiSolidOffer />}
        />
        <AboutWhy
          icon={<GrUpdate />}
          tittle={"Regular updates on new arrivals and exclusive drops"}
        />
        <AboutWhy
          tittle={"Sustainable and ethically sourced materials"}
          icon={<MdOutlineRecycling />}
        />
      </div>
    </div>
  );
};

export default AboutMainWhy;
