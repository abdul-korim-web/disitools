import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10  md:justify-around items-center md:min-h-screen  ">
      <div className="order-2 mt-10 px-10 md:order-1  ">
        <div className="flex space-x-[3px] items-center bg-[#E1E7FF] max-w-[294px] justify-center rounded-[1000px]  ">
          <img
            src="./images/herotop.png"
            className="w-[16px] h-[16px]"
            alt="hero cerkel"
          />
          <h2 className="text-[16px]  text-[#4F39F6]  ">
            New: AI-Powered Tools Available
          </h2>
        </div>
        <h2 className="text-[30px] font-[800] capitalize text-[#101727] lg:text-[72px] md:max-w-[70%]">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-[16px]   text-[#627382] md:max-w-[40%]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className=" flex items-center space-x-[16px] mt-3">
          <button className="py-3 px-4 text-white font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>
          <button className="btn btn-outline text-[#9514FA] rounded-[1000px]"><CiPlay1/> Watch Demo</button>
        </div>
      </div>
      <div className="order-1 flex justify-center md:order-2  ">
        <img src="./images/banner.png" className="w-[80%] " alt="hero banner" />
      </div>
    </div>
  );
};

export default Hero;
