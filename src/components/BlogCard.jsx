import React from "react";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-3 text-left">
        <div className="text-xl font-bold text-gray-800">{title}</div>
        <div className="text-md font-semibold leading-[20px] text-gray-500 mt-2">{description}</div>
        <a href="#!" className="text-green-600 text-sm mt-3 block">Read More →</a>
      </div>
    </div>
  );
};

export default BlogCard;
