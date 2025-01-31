import React from "react";

const TestimonialCard = ({ image, name, text, rating }) => {
  return (
    <div className="rounded-lg p-2">
      <div className="flex gap-3 p-4">
        <div className="z-50 p-1 bg-gray-50 rounded-xl">
          <img src={image} alt={name} className="w-22 h-22 rounded-xl z-50" />
        </div>

        <div>
          <div className="font-semibold text-xl text-gray-800">{name}</div>
          <div className="flex items-center text-yellow-500">
            {[...Array(rating)].map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
          </div>
        </div>
      </div>
      <div
        className="bg-gray-50 shadow-xl h-[130px] z-10 rounded-xl w-[400px] p-2 py-4"
        style={{ position: "relative", bottom: "50px"}}
      >
        <p className="text-lg font-normal text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: "images/15.png", // Replace with actual image URL
      name: "Kevin M.",
      text: "Outstanding service! Their service helped me navigate the complex process with ease. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      image: "images/13.png", // Replace with actual image URL
      name: "Olivia Spark",
      text: "They made my dream of relocating a reality. Thank you for the excellent support. 5 stars!",
      rating: 5,
    },
    {
      id: 3,
      image: "images/14.png", // Replace with actual image URL
      name: "Luciaa Greem",
      text: "Exceptional guidance! Their expertise was instrumental in securing my immigration status. Delighted with their service!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-200 clip clipno disnone" style={{paddingTop:'70px'}} >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold text-blue-900 z1">
          Testimonials
            <p className="text-lg text-gray-700 mb-8">
              Satisfied clients who achieved their immigration dreams with us
            </p>
          </div>
          <div>
            <button className="mt-8 px-6 py-2 w-[120px] text-white bg-blue-900 rounded">
              View All
            </button>
          </div>
        </div>
        <div className="lg:flex justify-center z-30 gap-8 flexScroll">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
