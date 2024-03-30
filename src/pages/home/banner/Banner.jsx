import React from "react";
import toyota from "../../../assets/all-images/cars-img/toyota-offer-2.png";

const Banner = () => {
  return (
    <div className="w-full xl:h-[60vh] h-auto bg-[#000d6b] overflow-hidden text-white flex flex-col xl:flex-row xl:gap-10 gap-4 xl:px-[70px] px-6 xl:mt-[70px] mb-[30px] pb-6">
      <div className="pt-[40px] min-[375px]:ml-[28px] xl:ml-0 min-[414px]:ml-[37px] min-[428px]:ml-[50px] min-[360px]:ml-[20px]">
        <img
          className="xl:w-[480px] min-[320px]:w-[280px] xl:shrink-0 bg-cover"
          src={toyota}
          alt="car-image"
        />
      </div>
      <div className="xl:pt-[30px] min-[320px]:pt-0">
        <h1 className="xl:text-4xl xl:w-[500px] xl:py-5 leading-[50px] min-[320px]:text-2xl min-[320px]:text-center xl:text-start">
          Do You Want To Earn With Us? So Don't Be Late.
        </h1>
        <button className="bg-white text-[#000d6b] min-[320px]:ml-[65px] min-[412px]:ml-[110px] min-[375px]:ml-[100px] min-[360px]:ml-[92px] min-[414px]:ml-[115px] min-[428px]:ml-[121px] xl:ml-0 py-1 px-3 rounded-md xl:mt-3 mt-5 font-semibold">
          Become a Driver
        </button>
      </div>
    </div>
  );
};

export default Banner;
