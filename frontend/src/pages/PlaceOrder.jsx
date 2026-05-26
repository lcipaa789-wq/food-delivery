import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const inputStyle =
    "mb-4 p-2.5 w-full border border-gray-500 rounded outline-[tomato]";
  return (
    <>
      <form className="flex items-start justify-between gap-[80px] mt-[100px]">
        <div className="w-full max-w-[500px]">
          <p className="text-10 font-semibold mb-12.5 ">Delivery Information</p>
          <div className="flex gap-2.5">
            <input
              className={inputStyle}
              type="text"
              placeholder="First name"
            />
            <input className={inputStyle} type="text" placeholder="Last name" />
          </div>
          <input className={inputStyle} type="email" placeholder="Email" />
          <input className={inputStyle} type="text" placeholder="Street" />
          <div className="flex gap-2.5">
            <input className={inputStyle} type="text" placeholder="City" />
            <input className={inputStyle} type="text" placeholder="State" />
          </div>
          <div className="flex gap-2.5">
            <input className={inputStyle} type="text" placeholder="Zip code" />
            <input className={inputStyle} type="text" placeholder="Country" />
          </div>
          <input className={inputStyle} type="text" placeholder="Phone" />
        </div>
        <div className="w-full max-w-[max(30%,500px)]">
          <div className="flex-1 flex flex-col gap-5 ">
            <h2 className="text-10 font-semibold">Cart total</h2>
            <div>
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-2.5" />
              <div className="flex justify-between text-gray-600">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-2.5" />
              <div className="flex justify-between text-gray-600">
                <p>Total</p>
                <p>
                  $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </p>
              </div>
            </div>
            <button className=" mt-7.5 border-none text-white bg-red-500 w-[max(15vw,200px)] py-3 rounded-2xl cursor-pointer">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
