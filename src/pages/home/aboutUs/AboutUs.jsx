import React from "react";
import { FaCheck } from "react-icons/fa6";
import bmw from "../../../assets/all-images/cars-img/bmw-offer.png";

const AboutUs = () => {
  return (
    <div className="w-full xl:h-screen h-auto xl:px-[70px] px-[25px] flex xl:flex-row flex-col justify-between gap-[40px] pt-[680px] min-[320px]:pt-[630px] min-[375px]:pt-[660px] xl:pt-[230px] min-[360px]:pt-[650px]">
      <div className="flex-1">
        <h4 className="text-[#f9a826] text-2xl mb-2 font-semibold">About us</h4>
        <h1 className="text-4xl font-semibold mb-3 min-[320px]:text-3xl text-[#000d6b]">
          Welcome to car-hire & services
        </h1>
        <p className="leading-[28px] mb-3 text-[#000d6b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a qui
          delectus hic sit, nulla et. Exercitationem reprehenderit beatae ex,
          alias esse accusantium maxime aliquam hic quae quasi minima eius
          rerum, cumque ab nulla fugiat. Temporibus accusantium quas optio hic!
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
  );
};

export default AboutUs;
