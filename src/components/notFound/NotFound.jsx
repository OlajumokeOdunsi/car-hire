import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-[250px] text-center w-full h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-8">
        NOT FOUND: ERROR 404
      </h1>
      <Link to={"/"}>
        <button className="bg-[#000d6b] text-white px-3 py-2 rounded">
          Go back to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
