import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navMenu = [
    { name: "Products", path: "/" },
    { name: "Features", path: "/" },
    { name: "Pricing", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "FAQ", path: "/" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-base-100 shadow-sm px-5 lg:px-20 py-4 lg:py-[26px]">
        

        <div>
          <img src="./images/DigiTools.png" alt="" className="w-[120px] lg:w-auto" />
        </div>

        <div className="hidden lg:flex">
          <ul className="flex space-x-8">
            {navMenu.map((item, index) => (
              <li key={index} className="text-[#101727] text-[16px] font-semibold">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <button>
            <CiShoppingCart className="text-[20px]" />
          </button>

          <button className="hidden sm:block text-[16px]">
            Login
          </button>

          <button className="hidden sm:block text-[14px] lg:text-[16px] py-2 lg:py-3 px-3 lg:px-4 text-white capitalize font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </button>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden px-5 pb-5 bg-base-100 shadow-md">
          <ul className="flex flex-col space-y-4">
            {navMenu.map((item, i) => (
              <li key={i} className="text-[#101727] text-[16px] font-semibold">
                {item.name}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col space-y-3">
            <button className="text-left">Login</button>
            <button className="py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;