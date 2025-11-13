import React from "react";
import Style from "./Hero.module.css";
import "animate.css";
import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/open-sans";

export default function Hero() {
  return (
    <>
      <div className={`row ${Style.section} `}>
        <div
          className={`col-md-5 col-sm-6 home-info text-sm-center text-md-start d-flex gap-4  ${Style.heroText}`}
        >
          <h2
            className={` ${Style.homeTitle} fw-bold  animate__animated animate__fadeInDown`}
          >
            Find, book and <br />
            rent a car
            <span className={`text-primary text-capitalize ${Style.supTitle}`}>
              {" "}
              easily
            </span>
          </h2>
          <p
            className={`${Style.textMuted} lh-lg  animate__animated animate__fadeInDown `}
          >
            Get a car wherever and whenever <br />
            you need it with your IOS and Android device.
          </p>
          <div className="my-4 ps-5">
            <img
              className="me-3"
              alt="dload-Android"
              src="/images/G-play.png"
            />
            <img alt="dload-ios" src="/images/A-store.png" />
          </div>
        </div>

        <div className={`col-md-7 col-sm-6 py-5 ${Style.heroImage}`}>
          <img
            className={`car w-100 ${Style.heroImageCar}`}
            alt="carImg"
            src="/images/car.png"
          />
        </div>
      </div>
    </>
  );
}
