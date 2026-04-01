import React from "react";

const Guite = () => {
  const guiteItems = [
    {
      id: 1,
      image: "./images/user.png",
      name: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: 2,
      image: "./images/package.png",
      name: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      id: 3,
      image: "./images/user.png",
      name: "Start Creating",
      description: "Download and start using your premium  tools immediately.",
    },
  ];
  return (
    <div className="mt-10 md:mt-20 bg-[#f9fafc] py-10 px-5 flex flex-col justify-center items-center space-y-[10px] md:py-20 md:space-y-[16px] ">
      <h2 className="font-extrabold text-[25px] md:text-[48px] ">
        Get Started in 3 Steps
      </h2>
      <h2 className="text-[16px] text-[#627382] text-center md:text-[20px]">
        Start using premium digital tools in minutes, not hours.
      </h2>
      <div className="flex flex-wrap justify-center items-center space-y-4 space-x-[30px]">
        {guiteItems?.map((item) => (
          <div
            key={item?.id}
            className="bg-white max-w-[300px] flex flex-col space-y-4 p-6 border border-2 border-white ransition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-[#5a46ff] hover:to-[#a020ff] cursor-pointer"
          >
            <div className="flex justify-end">
              <div className="w-[40px] h-[40px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center rounded-full ">
                {item?.id}
              </div>
            </div>
            <div className="bg-[#f3e8fe] w-[60px] h-[60px] rounded-full flex justify-center items-center mx-auto  ">
              <img className="w-[40px] h-[40px]" src={item?.image} alt={item?.name} />
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-[20px] font-bold text-[#101727]   ">{item?.name}</h2>
              <p className="text-[#627382] text-[16px]">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guite;
