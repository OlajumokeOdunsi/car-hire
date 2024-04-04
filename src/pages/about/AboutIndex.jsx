import React from "react";
import { FaCheck } from "react-icons/fa6";
import bmw from "../../assets/all-images/cars-img/bmw-offer.png";
import drive from "../../assets/all-images/drive.jpg";
import SliderBg from "../../sliderBg/SliderBg";
import { FaPhone } from "react-icons/fa";
import Banner from "../home/banner/Banner";
import Experts from "./experts/Experts";

const AboutIndex = () => {
  return (
    <div className="w-full xl:mt-[180px] min-[320px]:mt-[70px]">
      <SliderBg title={"About"} />
      <div className="xl:h-auto h-auto xl:px-[70px] px-[25px] flex xl:flex-row flex-col justify-between gap-[40px] pt-[80px] min-[320px]:pt-[30px] min-[375px]:pt-[30px] xl:pt-[60px] min-[360px]:pt-[30px]">
        <div className="flex-1">
          <h4 className="text-[#f9a826] text-2xl mb-2 font-semibold">
            About us
          </h4>
          <h1 className="text-4xl font-semibold mb-3 min-[320px]:text-3xl text-[#000d6b]">
            Welcome to car-hire & services
          </h1>
          <p className="leading-[28px] mb-3 text-[#000d6b]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a qui
            delectus hic sit, nulla et. Exercitationem reprehenderit beatae ex,
            alias esse accusantium maxime aliquam hic quae quasi minima eius
            rerum, cumque ab nulla fugiat. Temporibus accusantium quas optio
            hic!
          </p>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <FaCheck className="pt-1 min-[320px]:pt-0 text-[#000d6b]" />
              <p className="min-[320px]:text-[14px] mb-2 text-[#000d6b]">
                Lorem ipsum dolor sit amet, adipisicing.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck className="pt-1 min-[320px]:pt-0 text-[#000d6b]" />
              <p className="min-[320px]:text-[14px] text-[#000d6b]">
                Lorem ipsum dolor sit, consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img className="items-end w-[550px] object-cover" src={bmw} alt="" />
        </div>
      </div>
      <div className="xl:px-[70px] px-5 mb-5 pt-10 flex flex-col-reverse xl:flex-row gap-5">
        <img className="xl:w-[500px] w-full rounded-md" src={drive} alt="" />
        <div className="flex-1">
          <h1 className="text-[#000d6b] text-3xl font-semibold mb-3">
            We Are Committed To Provide Safe Ride Solutions
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aut saepe facere, fugiat accusamus quae expedita incidunt ipsam.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            magnam laboriosam assumenda beatae perspiciatis culpa temporibus
            aspernatur perferendis.
          </p>
          <h4 className="text-xl mb-3 text-[#f9a826]">Need any help?</h4>
          <div className="flex items-center gap-1">
            <FaPhone className="text-[#000d6b]" size={10} />
            <span className="text-[#000d6b] font-semibold">
              +23408108721330
            </span>
          </div>
        </div>
      </div>
      <Banner />
      <Experts />
    </div>
  );
};

export default AboutIndex;
