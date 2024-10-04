"use client";
import React from "react";
import { HeroParallaxDemo } from "../components/HeroParallaxDemo"; // Make sure the path is correct
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>

        {/* Use HeroParallaxDemo here */}
        <HeroParallaxDemo />
        <BentoGridThirdDemo />

      </div>
    </section>
  );
};

export default Services;
