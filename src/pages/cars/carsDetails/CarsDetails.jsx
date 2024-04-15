import React from "react";
import carData from "../../../assets/data/CarData";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import mastercard from "../../../assets/all-images/master-card.jpg";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const CarsDetails = () => {
  const handleScroll = () => {
    scroll.scrollToTop();
  };

  let navigate = useNavigate();

  const { carId } = useParams();
  const cars = carData.find((car) => car.id === parseInt(carId));

  return (
    <div className="w-full h-auto xl:px-[70px] px-5 pt-[50px] mb-10 xl:mt-[180px] min-[320px]:mt-[70px]">
      <div className="flex flex-col xl:flex-row gap-5 w-full">
        <img className="flex-1 " src={cars.imgUrl} alt="" />
        <div className="flex-1">
          <h1 className="xl:text-[32px] font-bold text-[#000d6b] mb-3 min-[414px]:text-[35px] min-[375px]:text-[30px] min-[360px]:text-[32px]">
            {cars.carName}
          </h1>
          <span className="flex items-center gap-6 mb-5">
            <p className="text-[#000d6b] font-bold min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[22px] min-[360px]:text-[20px]">
              ${cars.price} / Day
            </p>
            <div className="flex items-center gap-1">
              <div className="flex gap-1 text-[#f9a826]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p className="text-[#000d6b]">({cars.rating}ratings)</p>
            </div>
          </span>
          <p className="w-400px mb-5 leading-[30px]">{cars.description}</p>
          <div className="flex items-center gap-10 mb-3 min-[320px]:gap-6 min-[375px]:gap-8 min-[414px]:gap-[45px] min-[360px]:gap-[30px]">
            <div className="flex items-center gap-1">
              <span className="text-[#f9a826]">{cars.mod}</span>
              <span className="min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[20px] min-[360px]:text-[18px] xl:text-[18px]">
                {cars.model}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#f9a826]">{cars.auto}</span>
              <span className="min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[20px] min-[360px]:text-[18px] xl:text-[18px]">
                {cars.automatic}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#f9a826]">{cars.mph}</span>
              <span className="min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[20px] min-[360px]:text-[18px] xl:text-[18px]">
                {cars.speed}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-10 min-[320px]:gap-6 min-[375px]:gap-8 min-[414px]:gap-[45px] min-[360px]:gap-[30px]">
            <div className="flex items-center gap-1">
              <span className="text-[#f9a826]">{cars.location}</span>
              <span className="min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[20px] min-[360px]:text-[18px] xl:text-[18px]">
                {cars.gps}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#f9a826]">{cars.seat}</span>
              <span className="min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[20px] min-[360px]:text-[18px] xl:text-[18px]">
                {cars.seatType}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#f9a826]">{cars.bra}</span>
              <span className="min-[320px]:text-[15px] min-[375px]:text-[18px] min-[414px]:text-[20px] min-[360px]:text-[18px] xl:text-[18px]">
                {cars.brand}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex flex-col xl:flex-row gap-[50px]">
        <div>
          <h4 className="text-[#000d6b] text-[20px] font-semibold xl:mb-3 mb-3">
            Booking Details
          </h4>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <input
              className="focus:outline-none border w-full xl:w-[250px] px-2 py-1 xl:mb-3 rounded-sm font-medium"
              type="text"
              placeholder="Enter your first name"
            />
            <input
              className="focus:outline-none border w-full xl:w-[250px] px-2 py-1 xl:mb-3 mb-5 rounded-sm font-medium"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <input
              className="focus:outline-none border w-full xl:w-[250px] px-2 py-1 xl:mb-3 rounded-sm font-medium"
              type="text"
              placeholder="Enter your email"
            />
            <input
              className="focus:outline-none border w-full xl:w-[250px] px-2 py-1 xl:mb-3 rounded-sm font-medium mb-5"
              type="text"
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <input
              className="focus:outline-none border w-full xl:w-[250px] px-2 py-1 xl:mb-3 rounded-sm font-medium"
              type="text"
              placeholder="From address"
            />
            <input
              className="focus:outline-none border w-full xl:w-[250px] px-2 py-1 xl:mb-3 rounded-sm font-medium mb-5"
              type="text"
              placeholder="To address"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <select className="border xl:w-[250px] w-full px-2 py-1 xl:mb-3 rounded-sm">
              <option value="1 person">One Person</option>
              <option value="2 person">Two Persons</option>
              <option value="3 person">Three persons</option>
            </select>
            <select className="border w-full xl:w-[250px] px-2 py-1 xl:mb-3 mb-5 rounded-sm">
              <option value="1 luggage">One Luggage</option>
              <option value="2 luggage">Two Luggages</option>
              <option value="3 luggages">Three Luggages</option>
            </select>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <input
              className="focus:outline-none border xl:w-[250px] w-full px-2 py-1 xl:mb-3 rounded-sm"
              type="date"
            />
            <span className="flex items-center gap-2 border xl:w-[250px] w-full px-2 py-1 xl:mb-3 rounded-sm mb-5">
              <span>Journey time</span>
              <input className="focus:outline-none" type="time" />
            </span>
          </div>
          <textarea
            className="border focus:outline-none px-3 pt-2 xl:w-[520px] w-full"
            cols="40"
            rows="5"
            placeholder="Write your message"
          ></textarea>
        </div>

        <div>
          <h4 className="text-[#000d6b] text-[20px] font-semibold mb-3">
            Payment Method
          </h4>
          <div className="flex items-center gap-2 mb-3">
            <input className="mt-1" type="radio" />
            <p className="text-[#000d6b] font-semibold">Direct bank transfer</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            perferendis accusantium odio? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="pt-8">
            <div className="mb-5">
              <img src={mastercard} alt="" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <input className="mt-1" type="radio" name="card" />
                <p>Check Payment</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <input className="mt-1" type="radio" name="card" />
                <p>Credit Card</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <input className="mt-1" type="radio" name="card" />
                <p>Debit Card</p>
              </div>
            </div>
            <button className="text-white bg-[#000d6b] px-3 py-1 rounded-md mt-3">
              Reserve Now
            </button>
            <Link to={"/cars"}>
              <button
                onClick={handleScroll}
                className="text-white bg-[#000d6b] px-3 py-1 rounded-md mt-3 ml-3"
              >
                Back to cars
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
