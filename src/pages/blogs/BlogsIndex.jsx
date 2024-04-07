import React from "react";
import SliderBg from "../../sliderBg/SliderBg";
import Blog from "../home/blog/Blog";

const BlogsIndex = () => {
  return (
    <div className="w-full h-auto xl:mt-[180px] min-[320px]:mt-[70px]">
      <SliderBg title={"Blogs"} />
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default BlogsIndex;
