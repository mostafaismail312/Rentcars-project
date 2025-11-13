import React from "react";
import { FaTags, FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";
import Style from "./BestDeals.module.css";

export default function BestDeals() {
  return (
    <>
      <section className={Style.mainContainer}>
        <div className="container-fluid px-0 ">
          <div className="row align-items-center gx-5">
            <div
              className={`${Style.img} col-lg-6 d-none d-lg-flex align-items-center justify-content-center position-relative `}
            >
              <img src="/public/imges/Audi.png" className="w-100" alt="" />
            </div>

            {/* النص */}
            <div className="col-md-5 p-4 mt-3">
              <button
                className="btn btn-primary rounded border-0 mb-3"
                style={{
                  color: "#0d6efd",
                  backgroundColor: "#0d6efd20",
                  width: "fit-content",
                }}
              >
                WHY CHOOSE US
              </button>

              <h2 className="fw-bold mb-4">
                We offer the best experience with our rental deals
              </h2>

              {/* المميزات */}
              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <FaTags size={28} color="#0d6efd" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Best price guaranteed</h5>
                  <p className="text-muted mb-0">
                    Find a lower price? We’ll refund you 100% of the difference.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <FaTruck size={28} color="#0d6efd" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">24 hour car delivery</h5>
                  <p className="text-muted mb-0">
                    Book your car anytime and we will deliver it directly to
                    you.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <FaCheckCircle size={28} color="#0d6efd" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Best quality vehicles</h5>
                  <p className="text-muted mb-0">
                    We maintain our cars regularly to ensure your safety and
                    comfort.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="me-3">
                  <FaHeadset size={28} color="#0d6efd" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">24/7 technical support</h5>
                  <p className="text-muted mb-0">
                    Have a question? Contact RentCars support anytime you need
                    help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
