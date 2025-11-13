import React from "react";
import Style from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <div className={Style.section1}>
        <div className={`  container text-center `}>
          <h3 className={Style.testHead}>TEST IMONIALS</h3>
          <h2 className="fw-bold mb-5 m-auto text-center">
            What people say about us?
          </h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-6 col-lg-5">
              <div className="d-flex bg-white shadow rounded overflow-hidden h-75">
                <img
                  alt="user1"
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  style={{ width: "40%", objectFit: "cover" }}
                />
                <div className="p-3 text-start">
                  <h4 className="fw-bold mb-1">
                    5.5 <span className="fs-6 fw-normal">stars</span>
                  </h4>
                  <div className="text-warning mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="mb-2" style={{ fontSize: "15px" }}>
                    “I feel very secure when using caretall's services. Your
                    customer care team is very enthusiastic and the driver is
                    always on time.”
                  </p>
                  <p className="fw-semibold mb-0">Charlie Johnson</p>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="d-flex bg-white shadow rounded overflow-hidden h-75">
                <img
                  alt="user2"
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  style={{ width: "40%", objectFit: "cover" }}
                />
                <div className="p-3 text-start">
                  <h4 className="fw-bold mb-1">
                    5.5 <span className="fs-6 fw-normal">stars</span>
                  </h4>
                  <div className="text-warning mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="mb-2">
                    “I feel very secure when using caretall's services. Your
                    customer care team is very enthusiastic and the driver is
                    always on time.”
                  </p>
                  <p className="fw-semibold mb-0">Charlie Johnson</p>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
