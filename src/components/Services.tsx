"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect"; // Adjust the path as needed
import { FiSettings, FiBarChart2, FiCpu, FiDatabase } from "react-icons/fi"; // Import icons
import ExpandableCardDemo from "./blocks/expandable-card-demo-grid";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";

const Services: React.FC = () => {
  // Define your services items (removed images)
  const ITservices = [
    {
      title: "Data & Analytics",
      icon: <FiBarChart2 size={40} />, // Ensure the icon is a React Element
      link: "/data-analytics", // Added link
      description:
        "Drive insights and informed decision-making through advanced analytics solutions.",
    },
    {
      title: "Gen AI Application",
      icon: <FiCpu size={40} />, // Ensure the icon is a React Element
      link: "/gen-ai", // Added link
      description:
        "Create intelligent applications that learn and adapt through generative AI technologies.",
    },
    {
      title: "Web Development",
      icon: <FiSettings size={40} />, // Ensure the icon is a React Element
      link: "/web-development", // Added link
      description:
        "Build modern, responsive websites that provide great user experiences and drive engagement.",
    },
    {
      title: "Mobile App Development",
      icon: <FiDatabase size={40}/>, // Ensure the icon is a React Element
      link: "/mobile-app-development", // Added link
      description:
        "Develop user-friendly mobile applications for iOS and Android platforms.",
    },
    {
      title: "Technology Consulting",
      icon: <FiBarChart2 size={40} />, // Ensure the icon is a React Element
      link: "/technology-consulting", // Added link
      description:
        "Leverage our expertise to optimize your technology strategy and solutions.",
    },
  ];
  // Replace with actual imports

   // Importing from the 'react-icons/fi' library

  const managementServices = [
    {
      title: "Business Process Consulting",
      description: (
        <span className="text-sm">
          Our Business Process Consulting includes a thorough process audit, innovative process design, and strategic business process re-engineering to enhance operational efficiency and effectiveness.
        </span>
      ),
      className: "md:col-span-1",
      icon: <FiSettings className="h-4 w-4 text-neutral-500" />, // Using FiSettings icon
    },
    {
      title: "HR Consulting Service",
      description: (
        <span className="text-sm">
          Our HR Consulting Service encompasses a comprehensive HR audit, effective talent management strategies, and organizational development initiatives to optimize human capital.
        </span>
      ),
      className: "md:col-span-1",
      icon: <FiBarChart2 className="h-4 w-4 text-neutral-500" />, // Using FiBarChart2 icon
    },
    {
      title: "Digital Transformation Service",
      description: (
        <span className="text-sm">
          Our Digital Transformation Service includes tailored digital marketing strategies, comprehensive social media management, and a detailed digital transformation roadmap to drive business growth in the digital age.
        </span>
      ),
      className: "md:col-span-1",
      icon: <FiCpu className="h-4 w-4 text-neutral-500" />, // Using FiCpu icon
    },
    {
      title: "Sales and Marketing Service",
      description: (
        <span className="text-sm">
          Our Sales and Marketing Service offers sales training workbook creation, strategic sales strategy development, and in-depth market research and analysis to empower your sales team.
        </span>
      ),
      className: "md:col-span-2",
      icon: <FiDatabase className="h-4 w-4 text-neutral-500" />, // Using FiDatabase icon
    },
    {
      title: "Start-up and Scaling-up Consulting",
      description: (
        <span className="text-sm">
          Our Start-up and Scaling-up Consulting focuses on business plan development, funding and investment strategies, and scaling-up strategies to support your growth journey.
        </span>
      ),
      className: "md:col-span-1",
      icon: <FiSettings className="h-4 w-4 text-neutral-500" />, // Reusing FiSettings for illustration
    },
  ];
  

  return (
    <section id="services" className="sc-statistics-section-area gray-bg-color sc-pb-80">
      <div className="container mx-auto mb-20">
        {/* Main Section with Services */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        </div>
        <div className="lg:w-full w-full sc-statistics-area sc-pl-70 sc-md-pl-15 sc-md-mt-30">
          {/* Grid for Cards - 3 items per row */}
          <div className="grid lg:grid-rows-1 gap-8 mb-20">
           <ExpandableCardDemo/>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">IT Products & Services</h2>
        </div>
        <div className="lg:w-full w-full sc-statistics-area sc-pl-70 sc-md-pl-15 sc-md-mt-30">
          {/* Grid for Cards - 3 items per row */}
          <div className="grid lg:grid gap-8 mb-20">
            <HoverEffect items={ITservices}  />
          </div>
        </div>
        <div className="lg:w-full w-full sc-statistics-area sc-pl-70 sc-md-pl-15 sc-md-mt-30">
          {/* Grid for Cards - 3 items per row */}
          <div className="grid lg:grid gap-8">
            <BentoGridThirdDemo/>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Services;
