import React from "react";

const TestimonialCard = ({ image, name, testimonial, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4"
      />
      {/* Name and Rating */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <div className="flex justify-center mt-2 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 15l-3.5 2 1-4.5L2 8h4.5L10 3l2.5 5.5H17l-5.5 4.5L10 15z"
              />
            </svg>
          ))}
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="text-md text-gray-600 mt-4">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
