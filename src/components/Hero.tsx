"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function Hero() {
  const images = [
    "\picture1.png",
    "\Picture2.png",
    "\Picture3.png"

  ];
  
  const slidesContent = [
    {
      subheader: "EMPOWERING BUSINESSES",
      header: "Government Advisory",
      description: "Committed to helping governments and the public sector with expert-led discovery, assessment and strategy consultation."
    },
    {
      subheader: "EMPOWERING BUSINESSES",
      header: "IT Strategy",
      description: "Committed to developing or upgrading IT capabilities for organizations with expert-led discovery, assessment and strategy consultation."
    },
    {
      subheader: "EMPOWERING BUSINESSES",
      header: "Digital Marketing",
      description: "Committed to delivering digital solutions for organizations through incisive scoping and expert-led strategy."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <div className="relative mb-20">
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center max-w-2xl mx-8 md:mx-16 lg:mx-24"
        >
          <motion.span 
            className="text-sm uppercase tracking-wider text-white/80 mb-2"
          >
            {slidesContent[currentIndex].subheader}
          </motion.span>
          
          <motion.h2 
            className="font-bold text-2xl md:text-5xl text-left text-white py-2"
          >
            {slidesContent[currentIndex].header}
          </motion.h2>
          
          <motion.p 
            className="font-medium text-md md:text-2xl text-left text-white py-4"
          >
            {slidesContent[currentIndex].description}
          </motion.p>
          
          <button className="w-full md:w-80 px-6 py-3 bg-yellow-500 text-white text-center rounded-full relative mt-4">
  Get Started
</button>
        </motion.div>
      </ImagesSlider>
      
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-700/50 rounded-full text-white"
      >
        ←
      </button>
      
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-700/50 rounded-full text-white"
      >
        →
      </button>
    </div>
  );
}