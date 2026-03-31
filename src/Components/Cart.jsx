import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const total = cart?.reduce((total, product) => total + product?.price, 0);
  const handelRemove = async (id) => {
    try {
      const filterProduct = await cart?.filter((item) => item?.id !== id);
      setCart(filterProduct);
      toast.success("successfully remove product");
    } catch (error) {
      toast.error("something went wrong !");
    }
  };
  return (
    <div className="mt-10 md:mt-20">
      <div className="w-[80%] max-w-[1200px] mx-auto border border-2 border-[#f2f2f2] p-[10px] rounded-[16px] md:p-[20px] md:p-[40px] ">
        <h2 className="font-bold text-[#101727] capitalize text-[24px]  ">
          Your Cart
        </h2>
        <div className="flex flex-col space-y-4 mt-6">
          {cart?.map((item) => (
            <div
              key={item?.id}
              className="bg-[#f9fafc] rounded-2xl p-[20px] flex justify-between items-center "
            >
              <div className="flex items-center ">
                <div className="border border-[#F2F2F2] w-[60px] h-[60px] rounded-full flex justify-center items-center ">
                  <img
                    className="w-[32px] h-[32px]"
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <div>
                  <h2 className="text-[#101727] font-[600] md:text-[20px]">
                    {item?.title}
                  </h2>
                  <h2 className="text-[#627382] font-[500] md:text-[16px]">
                    ${item?.price}
                  </h2>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handelRemove(item?.id)}
                  className="btn  border-none text-[#FF3980] md:text-[16px] "
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-[16px] text-[#627382] ">Total:</h2>
          <h2 className="font-bold text-[#101727] text-[24px]">${total}</h2>
        </div>
        <button
          onClick={() => toast?.success("This is a demo project")}
          className={`mt-4 w-[100%] btn py-6 px-4  text-white font-semibold rounded-full ${!cart?.length ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"}`}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
