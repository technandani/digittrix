import React from "react";

const InsCard = ({ image, name, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      {/* Background image with overlay */}
      <div
        className="w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
      </div>

      <div className="p-3 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="text-2xl font-bold mb-1 text-white">{name}</div>
        <div className="text-md font-semibold mb-2 text-gray-300">{address}</div>
        <a href="#!" className=" text-white text-md flex items-center gap-2">See Details <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  );
};

export default InsCard;
