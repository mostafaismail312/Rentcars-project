import React from "react";
import Style from "./Download.module.css";
export default function Download() {
  return (
    <>
      <section className={`section-6 mb-2 ${Style.mainSection}`}>
        <div className="container mt-5">
          <div className="row">
            <div className={`col-lg-5 ${Style.leftSection}`}>
              <h3>
                Download Rentcars App for
                <span className="text-primary">FREE</span>
              </h3>
              <p className="">
                For faster, easier booking and exclusive deals.
              </p>
              <img
                alt=""
                className="me-2 mb-3"
                src="data:image/png;base64,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"
              />
              <img
                className="mb-3"
                src="data:image/png;base64,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"
              />
              <form className={Style.formDiv}>
                <div className={` ${Style.inputDiv} mb-31`}>
                  <input
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    type="text"
                  />
                </div>
                <div className={` ${Style.inputDiv} mb-31`}>
                  <input
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                    type="text"
                  />
                </div>
                <div className={` ${Style.inputDiv} mb-31`}>
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className={`col-lg-5 ${Style.rightSection}`}>
              <div className={Style.rightSection}>
                <img
                  alt=""
                  className="w-75 b-0"
                  src="/public/imges/iphone.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
