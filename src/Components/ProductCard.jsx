import React from "react";

const ProductCard = ({ products,addProductToCart }) => {
  return (
    <div className="mt-10 md:mt-10 grid grid-cols-1 md:grid-cols-3  gap-2 px-5 lg:px-20 space-y-4">
      {products?.map((product) => (
        <div
          key={product?.id}
          className=" w-[100%] mx-auto border border-2 border-[#F2F2F2] rounded-[16px] p-[24px] md:w-[380px] ransition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-[#5a46ff] hover:to-[#a020ff] "
        >
          <div className="flex justify-end">
            <h2 className="w-[100px] bg-[#FEF3C6] text-center rounded-[1000px] py-2 px-3 text-[#BB4D00] font-[500]">
              {product?.badge}
            </h2>
          </div>
          <div className="border border-[#F2F2F2] w-[60px] h-[60px] rounded-full flex justify-center items-center ">
            <img
              className="w-[32px] h-[32px]"
              src={product?.image}
              alt={product?.title}
            />
          </div>
          <h2 className="mt-4 font-[700] text-[24px] capitalize text-[#101727] ">
            {product?.title}
          </h2>
          <p className="mt-4  text-[16px]  text-[#627382] ">
            {product?.description}
          </p>
          <h2 className="font-bold text-[24px] text-[#101727] ">
            ${product?.price}{" "}
            <span className="text-[16px] text-[#627382]">/mo </span>
          </h2>
          <div>
            <ul className="flex flex-col space-y-2 mt-4 ">
              {product?.features?.map((item,index) => (
                <li key={index} className="flex items-center  space-x-2 ">
                  <img
                    className="w-[20px] h-[20px]"
                    src="./images/Check.png"
                    alt="check"
                  />{" "}
                  <span className="text-[16px] text-[#627382] font-[500] ">
                   {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={()=>addProductToCart(product?.id)} className="mt-4 w-[100%] btn py-3 px-4  text-white font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
