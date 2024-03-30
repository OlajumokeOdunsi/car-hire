import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    // Navbar starts
    <nav className="w-full h-auto">
      <div className="nav_top w-full bg-[#000d6b] text-white px-[80px] xl:flex items-center hidden justify-between h-[70px]">
        <h1 className="text-xl font-semibold">CarHire</h1>
        <div className="flex items-center gap-4">
          <span>Need Help?</span>
          <span className="flex items-center gap-2">
            <FaPhone size={12} />
            +23408108721330
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center gap-1">
            <CiLogin className="pt-1 text-2xl" />
            Login
          </span>

          <span className="flex items-center justify-center gap-1">
            <FaUserCircle className="pt-1 text-xl" />
            Register
          </span>
        </div>
      </div>

      <div className="nav_middle xl:flex items-center justify-between px-[80px] py-4 hidden">
        <div className="flex items-center gap-2">
          <IoCarSport className="text-[#000d6b] text-6xl" />
          <h3 className="text-[#000d6b] font-bold text-xl">
            Car Rentals and Servicing
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-[#000d6b]" />
          <h3 className="text-[#000d6b] text-xl font-bold">Nigeria,</h3>
          <p className="text-[#000d6b]">Ikeja, Lagos</p>
        </div>

        <div className="flex items-center gap-3">
          <IoTimeSharp className="text-[#000d6b] font-bold text-xl" />
          <h3 className="text-[#000d6b] font-bold text-xl">
            Monday - Saturday
          </h3>
          <span className="text-[#000d6b]">9am - 6pm</span>
        </div>
        <button className="flex items-center gap-2 bg-[#000d6b] text-white py-1 px-3 rounded-md">
          <FaPhone />
          <span>Request a call</span>
        </button>
      </div>

      <div className="nav_bottom hidden xl:flex items-center justify-between px-[80px] bg-[#000d6b] text-white h-[70px]">
        <ul className="flex items-center gap-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/cars"}>Cars</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
        <span className="flex items-center bg-[#282d5ee9] px-3 py-2 rounded-full">
          <input
            className="bg-transparent focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <IoIosSearch size={20} />
        </span>

        <div className="hidden">
          <IoMdMenu />
        </div>
      </div>

      <div className="nav_bottom xl:hidden flex items-center justify-between px-[80px] bg-[#000d6b] text-white h-[70px]">
        <h1 className="text-2xl absolute left-5">CarHire</h1>
        {showNav && (
          <ul className="flex items-center gap-6 absolute left-0 top-[50px] flex-col w-full h-auto bg-[#000d6b] py-5">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/cars"}>Cars</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>

            <span className="flex items-center bg-[#282d5ee9] px-3 py-2 rounded-full">
              <input
                className="bg-transparent focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <IoIosSearch size={20} />
            </span>
          </ul>
        )}

        <div
          onClick={handleShowNav}
          className="text-white z-20 absolute right-5 text-2xl"
        >
          <IoMdMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
