import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="_footer_1b02c_1 text-white pt-5 pb-3 "
        style={{
          backgroundColor: "#051c34",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="container">
          <div className="row text-start">
            <div className="col-md-3 mb-4">
              <div className="d-flex p-1 justify-content-start align-items-center gap-3">
                <img
                  alt=""
                  src="/public/imges/Frame.png "
                  style={{
                    width: 33,
                  }}
                />
                <h4 className="fw-bold">RENTCARS</h4>
              </div>
              <div className="mt-3">
                <p>
                  <i className="fas fa-map-marker-alt me-2"></i>25566 Hc 1,
                  Glenallen, Alaska, 99588, USA
                </p>
                <p>
                  <i className="fas fa-phone-alt me-2"></i>+603 4784 273 12
                </p>
                <p>
                  <i className="fas fa-envelope me-2"></i>rentcars@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Our Products</h5>
              <ul className="list-unstyled">
                <li>Career</li>
                <li>Car</li>
                <li>Packages</li>
                <li>Features</li>
                <li>Priceline</li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Resources</h5>
              <ul className="list-unstyled">
                <li>Download</li>
                <li>Help Centre</li>
                <li>Guides</li>
                <li>Partner Network</li>
                <li>Cruises</li>
                <li>Developer</li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">About Rentcars</h5>
              <ul className="list-unstyled">
                <li>Why choose us</li>
                <li>Our Story</li>
                <li>Investor Relations</li>
                <li>Press Center</li>
                <li>Advertise</li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Follow Us</h5>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white fs-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-top border-secondary mt-4" />
          <p className="text-center mb-0">
            Copyright 2023 • Rentcars, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
