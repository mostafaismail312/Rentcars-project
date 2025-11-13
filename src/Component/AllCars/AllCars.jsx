import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./pagination.css";

export default function AllCars() {
  const [productsList, setproductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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
          image: images[index % images.length],
        }));
        setproductsList(cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    getCars();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productsList.length / productsPerPage);

  const maxVisiblePages = 4;
  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    let pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
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
          {currentProducts.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <button
            className="page-btn"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {getPageNumbers().map((num) => (
            <button
              key={num}
              className={`page-btn ${currentPage === num ? "active" : ""}`}
              onClick={(e) => paginate(num, e)}
            >
              {num}
            </button>
          ))}

          <button
            className="page-btn"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
