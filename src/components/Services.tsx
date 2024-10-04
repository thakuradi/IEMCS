"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect"; // Adjust the path as needed
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
const Services: React.FC = () => {
  // Define your services items
  const serviceItems = [
    {
      title: "Generative AI CoE",
      description: "Unlock the potential of AI and Gen-AI to automate tasks, improve decision-making, and innovate faster. From intelligent automation to AI-driven insights, we help businesses stay ahead of the curve.",
      link: "/generative-ai",
    },
    {
      title: "Data & Analytics",
      description: "Data Advisory, Data Cloud Enablement, Reporting & Data Visualization, Advanced Analytics, End to End Data Lakehouse.",
      link: "/data-analytics",
    },
    {
      title: "Intelligent Automation",
      description: "Internet of Things (IoT), Customer Relationship Management (CRM).",
      link: "/intelligent-automation",
    },
    {
      title: "BI & Data Warehousing",
      description: "Turn data into actionable insights with our BI and data warehousing solutions. We help businesses harness data for informed decision-making, predictive analytics, and strategic growth. Business Process Modeling, Robotic Process Automation (RPA), Process Automation Testing.",
      link: "/bi-data-warehousing",
    },
   
  ];

  return (
    <section id="services" className="py-16 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>

        {/* Use HoverEffect here */}
        <HoverEffect items={serviceItems} />
        <BentoGridThirdDemo/>
      </div>
    </section>
  );
};

export default Services;
