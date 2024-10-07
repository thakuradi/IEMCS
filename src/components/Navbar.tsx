"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Ensure you are using the correct Image component
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger and close icons for mobile
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scrolling and setting the navbar state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change the value to the scroll position at which the navbar should change
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white shadow-md fixed top-0 w-full" : "bg-transparent"
      } p-4 z-50 transition duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex place-items-start ">
          <Image
            src="/iemcs_logo.jpg" // Ensure the path is correct without '/public'
            alt="IEMCS Logo"
            width={140}
            height={70}
            className="mr-8 "
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {mobileMenuOpen ? (
            <HiOutlineX
              className="w-8 h-8"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              className="w-8 h-8"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-start ml-6">
          {/* Make the menu visible only on large screens */}
          <Menu setActive={setActive}>
            <MenuItem active={active} setActive={setActive} item="Home">
              <HoveredLink href="#home">Home</HoveredLink>
            </MenuItem>

            <MenuItem active={active} setActive={setActive} item="Services">
              <div className="relative">
                <ul>
                  <li className="p-2 hover:bg-gray-100">
                    <HoveredLink href="#web-development">
                      Web Development
                    </HoveredLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <HoveredLink href="#seo-services">SEO Services</HoveredLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <HoveredLink href="#digital-marketing">
                      Digital Marketing
                    </HoveredLink>
                  </li>
                </ul>
              </div>
            </MenuItem>

            <MenuItem active={active} setActive={setActive} item="About">
              <HoveredLink href="#about">About</HoveredLink>
            </MenuItem>

            <MenuItem active={active} setActive={setActive} item="Contact">
              <HoveredLink href="#contact">Contact</HoveredLink>
            </MenuItem>
          </Menu>
        </div>

        {/* "Get Consultancy" Button in Desktop */}
        <div className="hidden lg:block ml-auto">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Get Consultancy
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <Menu setActive={setActive} className="flex flex-col space-y-4">
            <MenuItem active={active} setActive={setActive} item="Home">
              <HoveredLink href="#home">Home</HoveredLink>
            </MenuItem>

            <MenuItem active={active} setActive={setActive} item="Services">
              <ul className="space-y-2">
                <li className="hover:bg-gray-100">
                  <HoveredLink href="#web-development">
                    Web Development
                  </HoveredLink>
                </li>
                <li className="hover:bg-gray-100">
                  <HoveredLink href="#seo-services">SEO Services</HoveredLink>
                </li>
                <li className="hover:bg-gray-100">
                  <HoveredLink href="#digital-marketing">
                    Digital Marketing
                  </HoveredLink>
                </li>
              </ul>
            </MenuItem>

            <MenuItem active={active} setActive={setActive} item="About">
              <HoveredLink href="#about">About</HoveredLink>
            </MenuItem>

            <MenuItem active={active} setActive={setActive} item="Contact">
              <HoveredLink href="#contact">Contact</HoveredLink>
            </MenuItem>

            {/* Add "Get Consultancy" button in mobile menu */}
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Get Consultancy
              </button>
            </div>
          </Menu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
