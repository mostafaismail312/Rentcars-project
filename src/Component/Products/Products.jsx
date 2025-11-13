import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
export default function Products({ limit }) {
  const [productsList, setproductsList] = useState([]);
  const images = [
    "/imges/1.png",
    "/imges/2.png",
    "/imges/3.png",
    "/imges/4.png",
  ];

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get("https://myfakeapi.com/api/cars/");
        const cars = response.data.cars.map((car, index) => ({
          ...car,
          image: images[index % images.length], // كل منتج ياخد صورة بالتناوب
        }));
        setproductsList(cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    getCars();
  }, []);

  const displayedProducts = limit ? productsList.slice(0, limit) : productsList;

  return (
    <>
      {/* props 4 products to home component  */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <button
            className="btn fw-bold text-primary px-4 py-2"
            style={{ backgroundColor: "#0d6efd20" }}
          >
            POPULAR RENTAL DEALS
          </button>
          <h2 className="mt-3 fw-bold">Most popular cars rental deals</h2>
        </div>

        <div className="row">
          {displayedProducts.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/allcars">
            <button className="btn btn-outline-secondary px-5 py-2 rounded-pill">
              Show All Cars <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
