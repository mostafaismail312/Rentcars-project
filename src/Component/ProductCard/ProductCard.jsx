import React from "react";
import Style from "./ProductCard.module.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className={`${Style.card}  border-1 rounded-4 p-3 h-100`}>
      <img
        className="card-img-top img-fluid"
        alt={product.name}
        src={product.image}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{product.car}</h5>

        <div className="d-flex align-items-center mb-2">
          <i className="fa-solid fa-star text-warning me-1"></i>
          <span className="fw-bold">4.8</span>
          <small className="text-muted ms-1">(1k reviews)</small>
        </div>

        <div className="d-flex flex-wrap text-muted small mb-2">
          <div className="me-3">
            <i className="fa-solid fa-user-group me-1"></i>{" "}
            {product.car_model_year} car_model_year
          </div>
          <div>
            <i className="fa-solid fa-gears me-1"></i> {product.transmission}
          </div>
        </div>

        <div
          className="d-flex flex-wrap text-muted small mb-3"
          style={{
            borderBottom: "1px solid rgba(33, 37, 41, 0.75)",
            paddingBottom: "15px",
          }}
        >
          <div className="me-3">
            <i className="fa-regular fa-snowflake me-1"></i> {product.ac}
          </div>
          <div>
            <i className="fa-solid fa-car-side me-1"></i> {product.doors} Doors
          </div>
        </div>

        <div className="mb-3 mt-auto d-flex justify-content-around">
          <small className="text-muted">Price</small>
          <h5 className="fw-bold mb-0">
            ${product.price}{" "}
            <small className="fw-normal text-muted">/day</small>
          </h5>
        </div>
        <Link to="/cardetalis">
          <button className="btn btn-primary w-100 rounded-pill mt-auto">
            Car Details <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
