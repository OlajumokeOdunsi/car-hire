import React from "react";
import "../findCar/FindCar.css";

const FindCar = () => {
  return (
    <div className="w-[90%] xl:h-[35vh] h-auto m-auto p-[30px] shadow-md flex flex-col xl:flex-row items-center gap-[50px] absolute xl:top-[130%] xl:left-[60px] top-[115%]  left-[20px] z-50 bg-white">
      <div>
        <h1 className="text-[#000d6b] text-5xl w-[300px] min-[320px]:w-[270px] min-[320px]:text-4xl min-[414px]:text-5xl min-[414px]:w-[350px] font-semibold min-[360px]:w-[300px] min-[360px]:text-5xl min-[375px]:text-5xl min-[390px]:text-5xl min-[390px]:w-[320px] min-[375px]:w-[322px]">
          Find your best car here
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-[20px]">
        <div className="flex items-center flex-col gap-5">
          <input
            type="text"
            placeholder="From Address"
            className="border-2 border-gray-200 xl:w-[210px] w-[330px] min-[320px]:w-[270px] min-[414px]:w-[350px] focus:outline-none py-2 px-2 min-[375px]:w-[318px] min-[360px]:w-[300px]"
          />
          <input
            type="time"
            placeholder="Journey time"
            className="journey_time border-2 border-gray-200 xl:w-[210px] w-[330px] min-[320px]:w-[270px] min-[414px]:w-[350px] focus:outline-none py-1 px-2 min-[375px]:w-[318px] min-[360px]:w-[300px]"
          />
        </div>
        <div className="flex items-center flex-col gap-5">
          <input
            type="text"
            placeholder="To Address"
            className="border-2 border-gray-200 xl:w-[210px] w-full min-[414px]:w-[350px] focus:outline-none py-1 px-2 min-[375px]:w-[318px] min-[360px]:w-[300px]"
          />
          <select className="border-2 border-gray-200 xl:w-[210px] w-[330px] min-[320px]:w-[270px] min-[414px]:w-[350px] py-2 px-2 focus:outline-none min-[375px]:w-[318px] min-[360px]:w-[300px]">
            <option value="ac car">AC Car</option>
            <option value="no ac car">NO AC Car</option>
          </select>
        </div>
        <div className="flex items-center flex-col gap-5">
          <input
            type="date"
            className="border-2 border-gray-200 xl:w-[210px] w-[330px] min-[320px]:w-[270px] min-[414px]:w-[350px] py-2 px-2  focus:outline-none min-[375px]:w-[318px] min-[360px]:w-[300px]"
          />
          <button className="xl:w-[210px] w-[330px] min-[320px]:w-[270px] min-[414px]:w-[350px] bg-[#000d6b] py-2 px-2 rounded-md text-white min-[375px]:w-[318px] min-[360px]:w-[300px]">
            Find Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindCar;
