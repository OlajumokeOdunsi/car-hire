import React from "react";
import blogDataTwo from "../../../assets/data/BlogDataTwo";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import avat from "../../../assets/all-images/ava-1.jpg";
import { useRef, useEffect } from "react";


const BlogDetails = () => {
  
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  const { blogId } = useParams();
  const blogs = blogDataTwo.find((blog) => blog.id === parseInt(blogId));
  return (
    <div className="w-full xl:h-auto xl:px-[70px] px-5 xl:mt-[230px] min-[320px]:mt-[90px] mb-5">
      <div className="flex flex-col xl:flex-row gap-5">
        <div>
          <img className="w-[550px]" src={blogs.imgUrl} alt="" />
        </div>
        <div>
          <h4 className="xl:text-3xl font-bold text-[#000d6b] min-[320px]:text-[22px] min-[375px]:text-[26px] min-[360px]:text-[26px] min-[414px]:text-[30px] mb-3">
            {blogs.title}
          </h4>
          <p className="xl:w-[550px] leading-[30px]">{blogs.description}</p>
          <div className="flex items-center gap-[50px] xl:gap-[30px] min-[320px]:gap-[25px]">
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
      <div>
        <h4 className="text-[#000d6b] text-2xl font-bold my-6">3 comments</h4>
        <div className="flex gap-3">
          <img
            className="w-[60px] h-[60px] rounded-full border-2 border-black"
            src={avat}
            alt=""
          />
          <div>
            <h5 className="text-[#000d6b] font-bold mb-2 xl:mb-1">
              Marcus Rashford
            </h5>
            <p className="mb-2 xl:mb-1">09 April 2024</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, suscipit.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl text-[#000d6b] font-bold mb-1">
            Leave a comment
          </h4>
          <p className="mb-5">You must sign in to post or make a comment</p>
          <form>
            <input
              className="xl:w-[250px] w-full mr-3 border py-1 px-2 focus:outline-none rounded mb-3 xl:mb-0"
              type="text"
              placeholder="Name"
            />
            <input
              className="xl:w-[250px] w-full border py-1 px-2 focus:outline-none rounded"
              type="text"
              placeholder="Email"
            />
            <br />
            <textarea
              className="border focus:outline-none xl:w-[510px] w-full mt-3 px-2 py-1"
              cols="30"
              rows="4"
              placeholder="Comment"
            ></textarea>
            <br />
            <button className="bg-[#000d6b] text-white py-2 px-3 rounded mt-4">
              Post a comment
            </button>
            <Link onClick={handleScroll} to={"/blogs"}>
              <button className="text-white bg-[#000d6b] px-3 py-2 rounded-md mt-3 ml-3">
                Back to blogs
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
