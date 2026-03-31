import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

const Tools = () => {
  const [selsctedButton, setSelectedButton] = useState("product");
  const [products,setProducts] = useState([])
  const getproducts = async () => {
    try {
      const res = await fetch("./data/productData.json");
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      toast.error("product fetch error")
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <>
      <div className="my-10 md:my-20">
        <div className=" flex flex-col justify-center items-center ">
          <h2 className="text-[30px] font-[800] md:text-[48px] ">
            Premium Digital Tools
          </h2>
        </div>
        <p className="w-[70%] mx-auto text-[16px] text-[#627382] md:w-[30%]  text-center md:text-[20px]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex justify-center items-center mt-5 ">
          <div className="border rounded-[1000px] border-[#F6F6F6] flex  ">
            <button
              onClick={() => setSelectedButton("product")}
              className={`btn py-3   font-semibold rounded-full ${selsctedButton == "product" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-black"}`}
            >
              Products
            </button>
            <button
              onClick={() => setSelectedButton("cart")}
              className={`btn py-3   font-semibold rounded-full ${selsctedButton == "cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-black"}`}
            >
              Cart (2)
            </button>
          </div>
        </div>
        {selsctedButton == "cart" ? <Cart /> : <ProductCard products={products} />}
      </div>
    </>
  );
};

export default Tools;
