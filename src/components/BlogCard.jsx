import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const BlogCard = ({ image, title, description }) => {
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
    const element = document.getElementById(`blog-card-${title}`);
    if (element) {
      currentObserver.observe(element);
    }
    return () => currentObserver.disconnect();
  }, [title]);

  return (
    <motion.div
      id={`blog-card-${title}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }} // Initial state: invisible and smaller
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }} // Animation when visible
      transition={{ duration: 0.6 }} // Duration of animation
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-3 text-left">
        <div className="text-xl font-bold text-gray-800">{title}</div>
        <div className="text-md font-semibold leading-[20px] text-gray-500 mt-2">
          {description}
        </div>
        <a href="#!" className=" text-md mt-3 block " style={{color:'green'}}>
          Read More →
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;