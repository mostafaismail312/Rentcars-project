import React from "react";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
// import ProductCard from "../ProductCard/ProductCard";
import Products from "../Products/Products";
import Slider from "../slider/Slider";
import BestDeals from "../BestDeals/BestDeals";
import Testimonials from "../Testimonials/Testimonials";
import Download from "../Download/Download";

export default function Home() {
  return (
    <>
      <Hero />
      <Products limit={4} />
      <HowItWorks />
      <Slider />
      <BestDeals />
      <Testimonials />
      <Download />
    </>
  );
}
