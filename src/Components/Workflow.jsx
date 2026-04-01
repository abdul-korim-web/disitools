import React from "react";

const Workflow = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-10 px-5 flex flex-col justify-center items-center md:py-[120px]">
      <h2 className="text-white font-extrabold text-[18px] text-center md:text-[38px] ">
        Ready to Transform Your Workflow?
      </h2>
      <p className="mt-3 text-center text-white/90 ">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className="mt-4 flex  justify-center items-center space-x-2    ">
        <button className="btn bg-white py-3 px-4 rounded-full text-[#9514FA]  ransition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-[#5a46ff] hover:to-[#a020ff]  ">Explore Products</button>
        <button className="btn bg-transparent text-white py-3 px-4 rounded-full ransition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-[#5a46ff] hover:to-[#a020ff]    ">View Pricing</button>
      </div>
      <h2 className="mt-3 text-white text-center">14-day free trial • No credit card required • Cancel anytime</h2>
    </div>
  );
};

export default Workflow;
