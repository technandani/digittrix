import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer motion

const SingleCard = ({ image, name, description, price, rating }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect visibility of the card
  const observer = React.useRef(
    new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    })
  );

  useEffect(() => {
    const currentObserver = observer.current;
    const element = document.getElementById(`consultant-card-${name}`);
    if (element) {
      currentObserver.observe(element);
    }
    return () => currentObserver.disconnect();
  }, [name]);

  return (
    <motion.div
      id={`consultant-card-${name}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden w-[320px] h-[400px] p-2"
      initial={{ opacity: 0, scale: 0.8 }} // Start with hidden and smaller
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }} // Animate to full opacity and normal scale
      transition={{ duration: 0.6 }} // Duration of the animation
    >
      <img src={image} alt={name} className="w-full h-50 object-cover rounded-lg shadow-lg" />
      <div className="">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
        </div>
        <p className="text-lg text-gray-500 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="font-semibold bg-blue-900 p-2 rounded text-white">{price}</button>
          <button className="text-amber-300 font-semibold p-2 rounded">
            <i className="fa-regular fa-comment-dots"></i> Message
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleCard;