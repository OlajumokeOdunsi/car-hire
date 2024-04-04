import React from "react";
import carData from "../../../assets/data/CarData";
import { Link } from "react-router-dom";

const HotOffer = () => {
  return (
    <div className="w-full xl:h-auto h-auto xl:px-[70px] px-6 pt-[40px] mb-[30px]">
      <div className="text-center mb-5">
        <h4 className="text-[#f9a826] font-semibold text-[17px]">Come With</h4>
        <h1 className="text-[#000d6b] text-4xl font-semibold">Hot Offers</h1>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-[40px]">
        {carData.map((car) => (
          <div
            key={car.id}
            className="border border-gray-200 shadow-sm p-5 h-auto"
          >
            <img className="w-[270px] pl-8" src={car.imgUrl} alt="" />
            <h4 className="text-center text-xl text-[#000d6b] font-bold my-3">
              {car.carName}
            </h4>
            <div className="flex items-center gap-1 text-[#000d6b] ml-[110px] font-semibold mb-3">
              <p>${car.price}.00</p>
              <p>/ Day</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-[#f9a826]">{car.mod}</span>
                <p className="font-semibold text-[14px] min-[320px]:text-[12px]">
                  {car.model}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#f9a826]"> {car.auto}</span>
                <p className="font-semibold text-[14px] min-[320px]:text-[12px] min-[375px]:text-[14px] min-[360px]:text-[14px] min-[390px]:text-[14px] min-[414px]:text-[14px] min-[426px]:text-[14px]">
                  {car.automatic}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#f9a826]">{car.mph}</span>
                <p className="font-semibold text-[14px] min-[320px]:text-[12px] min-[375px]:text-[14px] min-[360px]:text-[14px] min-[390px]:text-[14px] min-[414px]:text-[14px] min-[426px]:text-[14px]">
                  {car.speed}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <button className="bg-[#000d6b] text-white px-4 py-[6px] w-full flex-1">
                Rent
              </button>
              <Link to={`/cars/${car.id}`}>
                <button className="bg-[#f9a826] text-white px-4 py-[6px] w-[140px] flex-1">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotOffer;
