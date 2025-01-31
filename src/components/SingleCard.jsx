import React from 'react';

const SingleCard = ({ image, name, description, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[320px] h-[400px] p-2">
      <img src={image} alt={name} className="w-full h-50 object-cover rounded-lg shadow-lg " />
      <div className="">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <i class="fa-solid fa-star"></i>
          ))}
        </div>
        <p className="text-lg text-gray-500 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold bg-blue-900 p-2 rounded text-white">{price}</p>
          <button className="text-amber-300 px-4 py-2 rounded-full text-2xl"><i class="fa-regular fa-comment-dots"></i> Message</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

