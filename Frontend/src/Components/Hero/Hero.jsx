import React from "react";
import "./Hero.css";
import model_1 from "../../assets/frontend_assets/model_1.jpg";
import model_2 from "../../assets/frontend_assets/model_2.jpg";
import model_3 from "../../assets/frontend_assets/model_3.jpg";
import model_4 from "../../assets/frontend_assets/model_4.jpg";

const Hero = () => {
  return (
    <div className="hero border border-1 border-dark rounded bg-light mt-2">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex">
              <div className="d-flex text-dark w-50 flex-column align-items-center justify-content-center">
                <div className="d-flex">
                    <p className="hero_text_line bg-dark d-block me-2"></p>
                    <p>OUR BESTSELLERS</p>
                </div>
                <h1>LATEST TRENDS</h1>
                <div className="d-flex">
                    <p>SHOP NOW</p>
                    <p className="hero_text_line bg-dark d-block ms-2"></p>
                </div>
              </div>
              <img src={model_3} className="d-block w-50" alt="..." />
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex">
              <div className="d-flex text-dark w-50 flex-column align-items-center justify-content-center">
                <div className="d-flex">
                    <p className="hero_text_line bg-dark d-block me-2"></p>
                    <p>OUR BESTSELLERS</p>
                </div>
                <h1>LATEST TRENDS</h1>
                <div className="d-flex">
                    <p>SHOP NOW</p>
                    <p className="hero_text_line bg-dark d-block ms-2"></p>
                </div>
              </div>
              <img src={model_1} className="d-block w-50" alt="..." />
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex">
              <div className="d-flex text-dark w-50 flex-column align-items-center justify-content-center">
                <div className="d-flex">
                    <p className="hero_text_line bg-dark d-block me-2"></p>
                    <p>OUR BESTSELLERS</p>
                </div>
                <h1>LATEST TRENDS</h1>
                <div className="d-flex">
                    <p>SHOP NOW</p>
                    <p className="hero_text_line bg-dark d-block ms-2"></p>
                </div>
              </div>
              <img src={model_2} className="d-block w-50" alt="..." />
            </div>
          </div>

          <div className="carousel-item bg-light">
            <div className="d-flex justify-content-between">
              <div className="d-flex text-dark w-50 flex-column align-items-center justify-content-center">
                <div className="d-flex">
                    <p className="hero_text_line bg-dark d-block me-2"></p>
                    <p>OUR BESTSELLERS</p>
                </div>
                <h1>LATEST TRENDS</h1>
                <div className="d-flex">
                    <p>SHOP NOW</p>
                    <p className="hero_text_line bg-dark d-block ms-2"></p>
                </div>
              </div>
              <img src={model_4} className="d-block w-50" alt="..." />
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
