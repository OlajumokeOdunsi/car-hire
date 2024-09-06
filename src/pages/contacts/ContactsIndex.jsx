import React from "react";
import SliderBg from "../../sliderBg/SliderBg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactsIndex = () => {
  return (
    <div className="w-full xl:h-screen h-auto xl:mt-[180px] min-[320px]:mt-[70px] mb-5 xl:mb-0">
      <SliderBg title={"Contacts"} />
      <div className="xl:px-[70px] px-5 h-auto flex flex-col xl:flex-row gap-10">
        <div className="pt-[50px]">
          <h4 className="text-[#000d6b] text-xl font-semibold mb-5">
            Get in touch
          </h4>
          <div className="mb-5">
            <input
              className="border xl:w-[270px] w-full mr-5 py-1 px-2 rounded-md focus:outline-none mb-5 xl:mb-0"
              type="text"
              placeholder="Enter first name"
            />
            <input
              className="border xl:w-[270px] w-full py-1 px-2 rounded-md focus:outline-none"
              type="text"
              placeholder="Enter last name"
            />
          </div>
          <div className="mb-5">
            <input
              className="border xl:w-[270px] w-full mr-5 py-1 px-2 rounded-md focus:outline-none mb-5 xl:mb-0"
              type="email"
              placeholder="Enter email"
            />
            <input
              className="border xl:w-[270px] w-full py-1 px-2 rounded-md focus:outline-none"
              type="number"
              placeholder="Enter phone number"
            />
          </div>
          <textarea
            className="border xl:w-[560px] w-full mb-3 px-2 py-1 rounded-md focus:outline-none"
            cols="30"
            rows="3"
            placeholder="Write your message here"
          ></textarea>
          <br />
          <button className="bg-[#000d6b] text-white font-semibold px-3 py-2 rounded-md">
            Send Message
          </button>
        </div>
        <div className="xl:pt-[50px]">
          <h4 className="text-[#000d6b] text-xl font-semibold mb-5">
            Contact Information
          </h4>
          <p className="mb-3">67c Simpson by Adekunle Yaba Lagos.</p>
          <div className="flex items-center gap-2">
            <h6 className="text-[12px] font-bold text-[#000d6b]">Email:</h6>
            <p>jumaiodunsi@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-[12px] font-bold text-[#000d6b]">Phone:</h6>
            <p className="mb-3 pt-3">+2348093031532</p>
          </div>
          <h4 className="text-xl text-[#000d6b] font-bold mb-5">Follow Us:</h4>
          <div className="flex gap-5 text-xl text-[#000d6b]">
            <FaSquareFacebook />
            <FaPinterest />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsIndex;
