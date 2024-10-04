"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "../components/ui/images-slider"; // Make sure the import path is correct

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const slidesContent = [
    {
      header: "Government Advisory",
      description: "Committed to helping governments and the public sector.",
    },
    {
      header: "IT Strategy",
      description: "Committed to developing or upgrading IT capabilities for organizations.",
    },
    {
      header: "Digital Marketing",
      description: "Committed to delivering digital solutions for organizations through incisive scoping.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to auto-change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next image every 4 seconds
    }, 4000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  // Handle manual navigation to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle manual navigation to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          {/* Header */}
          <motion.h2 className="font-bold text-2xl md:text-5xl text-center text-white py-2">
            {slidesContent[currentIndex].header}
          </motion.h2>

          {/* Description */}
          <motion.p className="font-medium text-md md:text-2xl text-center text-white py-4">
            {slidesContent[currentIndex].description}
          </motion.p>

          {/* Button */}
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-700/50 rounded-full text-white"
      >
        ←
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-700/50 rounded-full text-white"
      >
        →
      </button>
    </div>
  );
}

