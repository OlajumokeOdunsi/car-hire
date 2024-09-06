import React from "react";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";


const Footer = () => {
  return (
    <div className="bg-[#000d6b] xl:px-[70px] px-6">
      <div className="w-full h-auto flex xl:items-center gap-8 xl:gap-0 flex-col xl:flex-row justify-between text-white py-10">
        <div className="flex flex-col mb-3">
          <div className="flex items-center gap-1 mb-3">
            <IoCarSport className="text-3xl" />
            <span className="font-semibold text-2xl">CarHire</span>
          </div>
          <p className="xl:w-[300px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            hic repudiandae quod dicta temporibus nam. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-2xl font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <Link>About Us</Link>
            <Link>Our Services</Link>
            <Link>Privacy Policy</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-2xl font-semibold">Head Office</h4>
          <div className="flex flex-col gap-3">
            <p>Yaba, Ebute metta Lagos state.</p>
            <p>Phone: +2348093031532</p>
            <p>Email: jumaiodunsi@gmail.com</p>
            <p>Openinh Hours: 9am - 6pm</p>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-2xl font-semibold mb-3">Newsletter</h4>
          <p className="w-[200px] mb-5">
            Subscribe to our newsletter to get updated informations
          </p>
          <span className="flex items-center bg-[#282d5ee9] px-3 py-2 rounded-full w-[230px]">
            <input
              className="bg-transparent focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <IoIosSearch size={20} />
          </span>
        </div>
      </div>
      <div className="text-center text-white border-t py-5">
        <p>
          &copy; copyright 2024, developed by{" "}
          <span className="text-[#f9a826] ">Olajumoke</span>. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
