import React from "react";
import BlogData from "../../../assets/data/BlogData";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="w-full xl:h-screen h-auto xl:px-[70px] px-5 overflow-hidden xl:pt-5 pt-10 mb-5">
      <div className="text-center">
        <h4 className="text-[#f9a826] font-semibold">Explore Our Blogs</h4>
        <h1 className="text-[#000d6b] font-bold text-3xl">Our Latest Blogs</h1>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 mt-8 gap-6 xl:gap-0">
        {BlogData.map((blog) => (
          <div key={blog.id} className="xl:w-[350px] h-auto">
            <img className="w-[350px]" src={blog.imgUrl} alt="" />
            <div className="border border-gray-100 shadow-md p-2">
              <h4 className="text-[#000d6b] font-semibold mb-2 text-[20px]">
                {blog.title}
              </h4>
              <p className="xl:w-[300px] mb-2">{blog.description}</p>
              <button className="text-[#f9a826] font-semibold mb-3">
                Read More..
              </button>
              <div className="flex items-center gap-[50px] xl:gap-[30px] min-[320px]:gap-[25px] border-t-2">
                <div className="flex items-center gap-1 pt-4 mb-2">
                  <FaUserCircle className="text-[#f9a826]" size={15} />
                  <span className="min-[320px]:text-[12px] xl:text-[17px] min-[375px]:text-[16px] min-[414px]:text-[19px] min-[360px]:text-[15px] min-[390px]:text-[17px] min-[428px]:text-[20px]">
                    Muhib
                  </span>
                </div>
                <div className="flex items-center xl:gap-8 gap-[30px] pt-4 mb-2">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#f9a826]" size={13} />
                    <span className="min-[320px]:text-[10px] xl:text-[17px] min-[375px]:text-[16px] min-[414px]:text-[19px] min-[360px]:text-[15px] min-[390px]:text-[17px] min-[428px]:text-[20px]">
                      10, April, 2024
                    </span>
                  </div>
                  <div className="flex items-center ">
                    <IoTimeSharp className="text-[#f9a826]" size={15} />
                    <span className="min-[320px]:text-[10px] xl:text-[17px] min-[375px]:text-[16px] min-[414px]:text-[19px] min-[360px]:text-[15px] min-[390px]:text-[17px] min-[428px]:text-[20px]">
                      10:52am
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
