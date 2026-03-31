import React from "react";

const Calculate = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around space-x-4  min-h-[100px] md:min-h-[247px]  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] items-center mt-10">
        <div  className="flex flex-col items-center pr-3 md:pr-10 border-r-1 border-white/40">
            <h2 className="text-white text-[40px] font-[800]">50K+</h2>
            <p className="text-white text-[16px] ">Active Users</p>
        </div>
        <div  className="flex flex-col items-center pr-3 md:pr-10 border-r-1 border-white/40">
            <h2 className="text-white text-[40px] font-[800]">200+</h2>
            <p className="text-white text-[16px] ">Premium Tools</p>
        </div>
        <div className="flex flex-col items-center pr-3 ">
            <h2 className="text-white text-[40px] font-[800]">4.9</h2>
            <p className="text-white text-[16px] ">Rating</p>
        </div>
      </div>
    </>
  );
};

export default Calculate;
