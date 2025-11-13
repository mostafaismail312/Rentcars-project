import React from "react";
import Style from "./HowItWorks.module.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaCarSide } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <>
      <section className="py-5 text-center ">
        <div className="container">
          <h5
            className=" text-center  m-auto py-2 px-3 rounded my-3"
            style={{
              color: "#0d6efd",
              backgroundColor: "#0d6efd20",
              width: "fit-content",
            }}
          >
            HOW IT WORKS
          </h5>
          <h2 className=" fw-light fs-2 mb-4">
            Rent with following 3 working steps
          </h2>

          <div className="row justify-content-center mt-5  w-75 m-auto">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className={`p-4 h-100 ${Style.boxIcon} `}>
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#0d6efd20",
                  }}
                >
                  <FaMapMarkerAlt size={30} color="#0d6efd" />
                </div>
                <h5 className="fw-bold mb-2">Choose Location</h5>
                <p className="text-muted">Choose your and find your best car</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className={`p-4 h-100 ${Style.boxIcon} `}>
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#0d6efd20",
                  }}
                >
                  <FaCalendarAlt size={30} color="#0d6efd" />
                </div>
                <h5 className="fw-bold mb-2">Pick-up Date</h5>
                <p className="text-muted">
                  Select your pick up date and time to book your car
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className={`p-4 h-100 ${Style.boxIcon} `}>
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#0d6efd20",
                  }}
                >
                  <FaCarSide size={30} color="#0d6efd" />
                </div>
                <h5 className="fw-bold mb-2">Book Your Car</h5>
                <p className="text-muted">
                  Book your car and we will deliver it directly to you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
