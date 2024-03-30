import React from "react";
import ServiceData from "../../../assets/data/ServiceData";
import "remixicon/fonts/remixicon.css";

const Popularservices = () => {
  return (
    <div className="w-full xl:h-screen h-auto xl:px-[70px] px-6 pt-[30px]">
      <div className="text-center">
        <h4 className="text-[#f9a826] font-semibold text-[20px]">See Our</h4>
        <h1 className="text-[#000d6b] text-4xl font-semibold">
          Popular Services
        </h1>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-[35px] pt-[60px]">
        {ServiceData.map((service) => (
          <div key={service.id} className="shadow-lg p-3">
            <i className="text-[#f9a826] text-3xl">{service.icon}</i>
            <h4 className="text-[#000d6b] text-[20px] font-bold mb-2 pt-5">
              {service.title}
            </h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularservices;
