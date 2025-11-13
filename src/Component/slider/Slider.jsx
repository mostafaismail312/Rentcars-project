// src/Component/BrandSlider/BrandSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

export default function BrandSlider() {
  const slideStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px", // ارتفاع خانة الشريحة
    padding: "10px",
    boxSizing: "border-box",
  };

  const imgStyle = {
    maxHeight: "100%", // يحافظ على الارتفاع داخل خانة الشريحة
    maxWidth: "100%",
    objectFit: "contain", // يجعل الصورة متناسقة بدون تشويه
    display: "block",
  };

  return (
    <div className="container my-4">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        
        loop={true}
        speed={3000} // سرعة ثابتة (كلما زادت، الحركة تكون أنعم)
        autoplay={{
          delay: 0, // يجعل الحركة مستمرة بدون توقف
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        grabCursor={false}
        allowTouchMove={false} // يمنع المستخدم من لمس السلايدر (يخليها ماشية بثبات)
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand1.png" alt="brand1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand2.png" alt="brand2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand3.png" alt="brand3" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand4.png" alt="brand4" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand1.png" alt="brand1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand2.png" alt="brand2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand3.png" alt="brand3" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand4.png" alt="brand4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand1.png" alt="brand1-2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>
            <img style={imgStyle} src="/images/brand2.png" alt="brand2-2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
