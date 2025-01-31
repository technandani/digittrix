import React from "react";
import InsCard from "./InsCard";

const InstituteSection = () => {
    const institutes = [
        { id: 1, image: "images/4.png", name: "Gray Matters", address: "SCO. 114, Main Market Sector 34, Chandigarh" },
        { id: 2, image: "images/5.png", name: "Brills Institute", address: "SCO. 114, Main Market Sector 34, Chandigarh" },
        { id: 3, image: "images/6.png", name: "Eli Institute", address: "SCO. 114, Main Market Sector 34, Chandigarh" },
        { id: 4, image: "images/7.png", name: "Touchstone", address: "SCO. 114, Main Market Sector 34, Chandigarh" },
        { id: 5, image: "images/8.png", name: "British Institute", address: "SCO. 114, Main Market Sector 34, Chandigarh" },
        { id: 6, image: "images/9.png", name: "Mantrin Institute", address: "SCO. 114, Main Market Sector 34, Chandigarh" }
      ];

  return (
    <section className="flex items-center" style={{padding:'50px 70px', paddingBottom:'150px'}}>
      <div className="grid lg:grid-cols-4 gap-4 items-center justify-center">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 gap-8 m-auto">
          {institutes.map((institute) => (
            <InsCard key={institute.id} {...institute} />
          ))}
          </div>
        </div>
        <div className="text-center lg:col-span-1 md:col-span-1 sm:col-span-1">
          <h2 className="text-2xl font-semibold text-gray-800">
          Popular Institutes
          </h2>
          <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, beatae?
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
