import React from "react";
import SliderBg from "../../sliderBg/SliderBg";
import HotOffer from "../home/hotOffer/HotOffer";
import { HiSortAscending } from "react-icons/hi";

const CarsIndex = () => {
  return (
    <div className="w-full h-auto xl:mt-[180px] min-[320px]:mt-[70px]">
      <SliderBg title={"Cars"} />
      <div className="xl:px-[70px] h-auto pt-[50px]">
        <div className="flex items-center gap-3 xl:px-[70px] ml-[40px] min-[375px]:ml-[70px] min-[414px]:ml-[90px] min-[360px]:ml-[60px] min-[390px]:ml-[80px] xl:ml-0 ">
          <div className="flex items-center gap-1 border xl:px-3 xl:py-1 shadow-sm px-2 py-1">
            <HiSortAscending
              className="pt-1 text-[#000d6b] font-semibold"
              size={20}
            />
            <span className="text-[#000d6b] font-semibold">Sort By</span>
          </div>
          <select className="border shadow-sm px-3 py-1 focus:outline-none w-[150px] font-xl">
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="model">Model</option>
            <option value="color">Color</option>
          </select>
        </div>
        <HotOffer />
      </div>
    </div>
  );
};

export default CarsIndex;
