"use client"; // Make sure this is included if you're using client-side rendering

import React from "react";
import {ExpandableCardDemo2} from "./blocks/expandable-card-demo-standard";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto mb-20">
        <h2 className="text-4xl font-bold mb-6">PATENT​</h2>
        <p className="text-lg max-w-2xl mx-auto">
        The unique collaboration between students and PhD researchers has led to the development of many patented technologies and innovative solutions. These breakthroughs address complex industry problems, improve operational efficiency, and provide sustainable solutions for future challenges. Our focus on Digital Engineering has resulted in technologies that incorporate automation, intelligent systems, and next-generation digital infrastructure
        </p>
      </div>
      <ExpandableCardDemo2/>
    </section>
  );
};

export default About;
