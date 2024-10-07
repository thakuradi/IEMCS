"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect"; // Adjust the path as needed
import { FiSettings, FiBarChart2, FiCpu, FiDatabase } from "react-icons/fi"; // Import icons
import ExpandableCardDemo from "./blocks/expandable-card-demo-grid";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
import { FiClipboard, FiFileText, FiMonitor, FiShoppingCart, FiTrendingUp } from "react-icons/fi";

const Services: React.FC = () => {
  
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
      description: "Process audit, process design, and business process re-engineering services to improve efficiency and streamline operations.",
      className: "md:col-span-1",
      icon: <FiClipboard className="h-4 w-4 text-neutral-500" />,
      link: "/business-process-consulting", // Example link
    },
    {
      title: "HR Consulting Service",
      description: "Comprehensive HR audit, talent management, and organizational development services for enhanced workforce performance.",
      className: "md:col-span-1",
      icon: <FiFileText className="h-4 w-4 text-neutral-500" />,
      link: "/hr-consulting-service", // Example link
    },
    {
      title: "Digital Transformation Service",
      description: "End-to-end digital marketing strategy, social media management, and transformation roadmaps for business growth in the digital age.",
      className: "md:col-span-1",
      icon: <FiMonitor className="h-4 w-4 text-neutral-500" />,
      link: "/digital-transformation-service", // Example link
    },
    {
      title: "Sales and Marketing Service",
      description: "Sales training workbook creation, strategy development, and market research to drive business success and improve customer engagement.",
      className: "md:col-span-2",
      icon: <FiShoppingCart className="h-4 w-4 text-neutral-500" />,
      link: "/sales-marketing-service", // Example link
    },
    {
      title: "Start-up and Scaling-up Consulting",
      description: "Business plan development, funding strategies, and scaling-up solutions for entrepreneurs and growing businesses.",
      className: "md:col-span-1",
      icon: <FiTrendingUp className="h-4 w-4 text-neutral-500" />,
      link: "/startup-scaling-consulting", // Example link
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
        <div className="lg:w-full w-full sc-statistics-area sc-pl-70 sc-md-pl-15 sc-md-mt-30 mb-20">
          {/* Grid for Cards - 3 items per row */}
          <div className="grid lg:grid gap-8">
            <BentoGridThirdDemo/>
          </div>
        </div>
        <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Management Solutions</h2>
        </div>
        <HoverEffect items={managementServices}  />
        </div>
        

      </div>
    </section>
  );
};

export default Services;
