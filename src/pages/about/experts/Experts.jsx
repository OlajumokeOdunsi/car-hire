import React from "react";
import avat1 from "../../../assets/all-images/ava-1.jpg";
import avat2 from "../../../assets/all-images/ava-2.jpg";
import avat3 from "../../../assets/all-images/ava-3.jpg";
import avat4 from "../../../assets/all-images/ava-4.jpg";

const Experts = () => {
  return (
    <div className="xl:px-[70px] px-5 w-full h-auto mb-10">
      <h4 className="text-[#f9a826] font-semibold text-center">Experts</h4>
      <h1 className="text-[#000d6b] font-semibold text-3xl text-center">
        Our Experts
      </h1>
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-5 mt-8">
        <div className="border">
          <img src={avat1} className="w-230px rounded-sm" alt="" />
          <h4 className="text-center pt-2 font-bold text-[#000d6b]">
            John Doe
          </h4>
          <p className="text-center text-gray-500 pb-3">
            5 years of experience
          </p>
        </div>
        <div className="border">
          <img src={avat2} className="w-230px rounded-sm" alt="" />
          <h4 className="text-center pt-2 font-bold text-[#000d6b]">
            Avery Bailey
          </h4>
          <p className="text-center text-gray-500 pb-3">
            5 years of experience
          </p>
        </div>
        <div className="border">
          <img src={avat3} className="w-230px rounded-sm" alt="" />
          <h4 className="text-center pt-2 font-bold text-[#000d6b]">
            Martin Cooper
          </h4>
          <p className="text-center text-gray-500 pb-3">
            5 years of experience
          </p>
        </div>
        <div className="border">
          <img src={avat4} className="w-230px rounded-sm" alt="" />
          <h4 className="text-center pt-2 font-bold text-[#000d6b]">
            Selena williams
          </h4>
          <p className="text-center text-gray-500 pb-3">
            5 years of experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
