import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const InsCard = ({ image, name, address }) => {
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
    const element = document.getElementById(`ins-card-${name}`);
    if (element) {
      currentObserver.observe(element);
    }
    return () => currentObserver.disconnect();
  }, [name]);

  return (
    <motion.div
      id={`ins-card-${name}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.8 }} // Initial state: invisible and smaller
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }} // Animation when visible
      transition={{ duration: 0.6 }} // Duration of animation
    >
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
        <a href="#!" className="text-white text-md flex items-center gap-2">
          See Details <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default InsCard;