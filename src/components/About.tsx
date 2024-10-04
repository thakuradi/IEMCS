"use client"; // Make sure this is included if you're using client-side rendering

import React from "react";


const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto">
          At AchieveX Solutions, we are committed to delivering high-quality software solutions that empower businesses to grow, innovate, and achieve more.
          With years of experience in the industry, our team is equipped to tackle the most complex challenges.
        </p>
        {/* Add the BentoGridThirdDemo component here */}
      
      </div>
    </section>
  );
};

export default About;
