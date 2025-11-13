import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Component/NavBar/NavBar";
import Hero from "./Component/Hero/Hero";
import "bootstrap";
import "./App.css";
import MasterLayOut from "./Component/MasterLayOut/MasterLayOut";
import Footer from "./Component/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Products from "./Component/Products/Products";
import Home from "./Component/Home/Home";
import AllCars from "./Component/AllCars/AllCars";
import CarDetalis from "./Component/CarDetalis/CarDetalis";

function App() {
  const routerArr = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayOut />,
      errorElement: <h1> Not Found </h1>,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "Products", element: <Products /> },
        { path: "allcars", element: <AllCars /> },
        { path: "cardetalis", element: <CarDetalis /> },
        { path: "Footer", element: <Footer /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerArr} />
    </>
  );
}

export default App;
