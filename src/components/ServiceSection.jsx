import React from "react";
import SingleCard from "./SingleCard";

const ServiceSection = () => {
  const consultants = [
    {
      id: 1,
      image: "images/4.png",
      name: "Visa Masters",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
      rating: 5,
    },
    {
      id: 2,
      image: "images/5.png",
      name: "Gray Matters",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
      rating: 5,
    },
    {
      id: 3,
      image: "images/6.png",
      name: "Eli Stones",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
      rating: 5,
    },
    {
      id: 4,
      image: "images/7.png",
      name: "Eli Stones",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
      rating: 5,
    },
    {
      id: 5,
      image: "images/8.png",
      name: "Eli Stones",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
      rating: 5,
    },
    {
      id: 6,
      image: "images/9.png",
      name: "Eli Stones",
      description: "Lorem Ipsum is simply dummy text for printing.",
      price: "$15.00 / 15 min",
      rating: 5,
    },
  ];

  return (
    <section className="flex items-center " style={{padding:'90px 40px'}}>
      <div className="grid lg:grid-cols-4 gap-4 items-center justify-center">
        <div className="text-center lg:col-span-1 md:col-span-1 sm:col-span-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            Top Rated Consultants
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our trusted partner in navigation the immigration journey
          </p>
          <button className="mt-6 px-6 py-2 w-[120px] text-white bg-blue-900 rounded">
            View All
          </button>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 gap-8 m-auto">
              {consultants.map((consultant) => (
                <SingleCard key={consultant.id} {...consultant} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
