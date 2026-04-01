import React from "react";

const Priceing = () => {
  const priceingData = [
    {
      id: 1,
      price: 0,
      isMostPopuler: false,
      name: "Starter",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonName: "Get Started Free",
    },
    {
      id: 2,
      price: 29,
      isMostPopuler: true,
      name: "Pro",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support ",
        "Unlimited projects ",
        "Cloud sync ",
        "Advanced analytics",
      ],
      buttonName: "Start Pro Trial",
    },
    {
      id: 3,
      price: 99,
      isMostPopuler: false,
      name: "Enterprise",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonName: "Contact Sales",
    },
  ];
  return (
    <div className="mt-10 md:mt-20  py-10 px-5 flex flex-col justify-center items-center space-y-[10px] md:py-20 md:space-y-[16px] ">
      <h2 className="font-extrabold text-[25px] md:text-[48px] ">
        Simple, Transparent Pricing
      </h2>
      <h2 className="text-[16px] text-[#627382] text-center md:text-[20px]">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </h2>
      <div className="flex flex-wrap justify-center items-center space-y-4 space-x-[30px]">
        {priceingData?.map((item) => (
          <div
            key={item?.id}
            className={`${item?.isMostPopuler ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" :"bg-[#F9FAFC]"} max-w-[300px] md:w-[380px] flex flex-col space-y-4 p-6 border border-2 border-white rounded-2xl mt-10 `}
          >
            {item?.isMostPopuler ? (
              <div className="flex justify-center mt-[-45px]">
                <div className=" bg-[#FEF3C6] text-[#BB4D00] py-2 px-3 flex items-center justify-center rounded-full font-medium  ">
                  Most Popular
                </div>
              </div>
            ) : (
              <></>
            )}
            <h2 className={` ${item?.isMostPopuler ?"text-white" :"text-[#101727]"} font-bold text-[24px] `}>{item?.name}</h2>
            <p className={` ${item?.isMostPopuler ?"text-white" :"text-[#627382]"} font-bold text-[16px] `}>{item?.description}</p>
            <div>
              <h2 className={` ${item?.isMostPopuler ?"text-white" :"text-[#101727]"} font-bold text-[40px] `}>${item?.price} <span className={`text-[16px] ${item?.isMostPopuler ? "text-white" :"text-[#627382]"} `}>/month</span></h2>
            </div>
            <ul className="flex flex-col space-y-2 h-[160px]">
              {item?.features?.map((feature)=>(
                <li className="flex space-x-1 items-center" key={feature}> <img  src={`${item?.isMostPopuler ? "./images/CheckWhite.png" :"./images/Check.png"} `} alt="check" /> <span className={` ${item?.isMostPopuler ?"text-white" :"text-[#627382]"} font-medium text-[16px] `}>{feature}</span> </li>
              ))}
            </ul>
            <button className={` ${item?.isMostPopuler ?"bg-white text-[#9514FA]" :"bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"} btn mt-6 py-5 px-4 rounded-[100px] font-bold text-[16px]  `}>{item?.buttonName}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Priceing;
