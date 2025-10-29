import React from "react";
import "./AboutHero.css";
import { assets } from "../../assets/frontend_assets/assets.js";

const AboutHero = () => {
  return (
    <div className="about_hero_div mt-4 border bg-light rounded">
      <div className="about_hero d-flex justify-content-between align-items-center">
        <div className="">
          <img
            src={assets.about_img}
            className="about_hero_img rounded"
            alt=""
          />
        </div>
        <div className="about_hero_text_div ms-5 py-5">
          <div className="d-flex">
            <h3 className="fw-bolder">Redefining Modern Fashion</h3>
            <div
              className="header_line bg-dark mt-3 ms-2"
              style={{ width: "50px", height: "3px" }}
            ></div>
          </div>
          <p className="mt-4 fw-semibold text-secondary">
            MonoX is a contemporary clothing brand built for trendsetters who
            value style, comfort, and confidence. Our collection brings together
            premium quality fabrics, minimalist designs, and bold looks that
            make every outfit stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
