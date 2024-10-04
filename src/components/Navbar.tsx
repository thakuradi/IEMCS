"use client";
import React, { useState } from 'react';
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">IEMCS</h1>

        <Menu setActive={setActive}>
          <MenuItem active={active} setActive={setActive} item="Home">
            <HoveredLink href="#home">Home</HoveredLink>
          </MenuItem>
          
          <MenuItem active={active} setActive={setActive} item="Services">
            <ProductItem 
              title="Web Development" 
              description="Custom web solutions for your business." 
              href="#services" 
              src="https://via.placeholder.com/140x70" 
            />
          </MenuItem>

          <MenuItem active={active} setActive={setActive} item="About">
            <HoveredLink href="#about">About</HoveredLink>
          </MenuItem>

          <MenuItem active={active} setActive={setActive} item="Contact">
            <HoveredLink href="#contact">Contact</HoveredLink>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
