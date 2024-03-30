import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../heroSlider/HeroSlider.css";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="swiper_item1">
          <div className="pt-[150px] xl:pl-[80px] pl-[20px] text-white">
            <h4 className="text-2xl semibold mb-5">For Rent $70 Per Day</h4>
            <h1 className="xl:text-5xl font-semibold mb-6 min-[320px]:text-4xl min-[414px]:text-[45px] min-[428px]:text-[45px]">
              Reserve now and get 50% off
            </h1>
            <button className="bg-white text-[#000d6b] px-3 py-2 font-semibold rounded-md">
              <Link to={"/carlist"}>Reserve Now</Link>
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_item2">
          <div className="pt-[150px] xl:pl-[80px] pl-[20px] text-white">
            <h4 className="text-2xl semibold mb-5">For Rent $70 Per Day</h4>
            <h1 className="xl:text-5xl font-semibold mb-6 min-[320px]:text-4xl min-[414px]:text-[45px] min-[428px]:text-[45px]">
              Reserve now and get 50% off
            </h1>
            <button className="bg-white text-[#000d6b] px-3 py-2 font-semibold rounded-md">
              <Link to={"/carlist"}>Reserve Now</Link>
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_item3">
          <div className="pt-[150px] xl:pl-[80px] pl-[20px] text-white">
            <h4 className="text-2xl semibold mb-5">For Rent $70 Per Day</h4>
            <h1 className="xl:text-5xl font-semibold mb-6 min-[320px]:text-4xl min-[414px]:text-[45px] min-[428px]:text-[45px]">
              Reserve now and get 50% off
            </h1>
            <button className="bg-white text-[#000d6b] px-3 py-2 font-semibold rounded-md">
              <Link to={"/carlist"}>Reserve Now</Link>
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
