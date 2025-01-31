import React from "react";
import InsCard from "./InsCard";

const InstituteSection = () => {
  const institutes = [
    {
      id: 1,
      image: "images/22.png",
      name: "Gray Matters",
      address: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
    {
      id: 2,
      image: "images/8.png",
      name: "Brills Institute",
      address: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
    {
      id: 3,
      image: "images/9.png",
      name: "Eli Institute",
      address: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
    {
      id: 4,
      image: "images/10.png",
      name: "Touchstone",
      address: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
    {
      id: 5,
      image: "images/12.png",
      name: "British Institute",
      address: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
    {
      id: 6,
      image: "images/11.png",
      name: "Mantrin Institute",
      address: "SCO. 114, Main Market Sector 34, Chandigarh",
    },
  ];

  return (
    <section
      className="lg:flex items-center padding bg-gray-200 "
      style={{ padding: "50px 70px", paddingBottom: "150px" }}
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-center">
        <div className="text-3xl font-semibold text-blue-900 maxNone pt-4">
          Popular Institutes
        </div>
        <div className="lg:col-span-3">
          <div className="grid lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-8 m-auto wfull ">
            {institutes.map((institute) => (
              <InsCard key={institute.id} {...institute} />
            ))}
          </div>
        </div>
        <div className="text-center lg:col-span-1 md:col-span-1 sm:col-span-1 disnone">
          <h2 className="text-2xl font-semibold text-blue-900">
            Popular Institutes
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, beatae?
          </p>
          <button className="mt-6 px-6 py-2 w-[120px] text-white bg-blue-900 rounded transform hover:scale-110">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstituteSection;
