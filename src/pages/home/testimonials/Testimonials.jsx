import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../testimonials/Testimonials.css";
import avat1 from "../../../assets/all-images/ava-1.jpg";
import avat2 from "../../../assets/all-images/ava-2.jpg";
import avat3 from "../../../assets/all-images/ava-3.jpg";
import avat4 from "../../../assets/all-images/ava-4.jpg";


const Testimonials = () => {
  return (
    <div
   
      className="w-full xl:h-[80vh] h-auto xl:px-[70px] px-5 text-white"
    >
      <div className="text-center">
        <h4 className="text-[#f9a826] font-semibold">Our Clients Says</h4>
        <h1 className="text-[#000d6b] font-semibold text-4xl">Testimonials</h1>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            360: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1,
            },
            414: {
              slidesPerView: 1,
            },
            428: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper bg-white mt-10"
        >
          <SwiperSlide>
            <p className="text-[#000d6b] leading-[28px] mb-5 text-center xl:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vitae labore corrupti illo ab voluptates quia maxime quaerat earum
              deserunt? Lorem ipsum dolor sit Dolore, optio?
            </p>
            <div className="flex items-center flex-col xl:flex-row gap-2">
              <img className="xl:w-[130px] w-[200px]" src={avat1} alt="" />
              <div className="flex flex-col text-[#000d6b] mt-7 items-center xl:items-start">
                <p className="font-bold">John Doe</p>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-[#000d6b] leading-[28px] mb-5 text-center xl:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vitae labore corrupti illo ab voluptates quia maxime quaerat earum
              deserunt? Lorem ipsum dolor sit Dolore, optio?
            </p>
            <div className="flex items-center flex-col xl:flex-row gap-2">
              <img className="xl:w-[130px] w-[200px]" src={avat2} alt="" />
              <div className="flex flex-col text-[#000d6b] mt-7 items-center xl:items-start">
                <p className="font-bold">Avery Bailey</p>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-[#000d6b] leading-[28px] mb-5 text-center xl:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vitae labore corrupti illo ab voluptates quia maxime quaerat earum
              deserunt? Lorem ipsum dolor sit Dolore, optio?
            </p>
            <div className="flex items-center gap-2 flex-col xl:flex-row">
              <img className="xl:w-[130px] w-[200px]" src={avat3} alt="" />
              <div className="flex flex-col text-[#000d6b] mt-7 items-center xl:items-start">
                <p className="font-bold">Martin Cooper</p>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-[#000d6b] leading-[28px] mb-5 text-center xl:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vitae labore corrupti illo ab voluptates quia maxime quaerat earum
              deserunt? Lorem ipsum dolor sit Dolore, optio?
            </p>
            <div className="flex items-center gap-2 flex-col xl:flex-row">
              <img className="xl:w-[130px] w-[200px]" src={avat4} alt="" />
              <div className="flex flex-col text-[#000d6b] items-center xl:items-start mt-7">
                <p className="font-bold">Selena Williams</p>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
