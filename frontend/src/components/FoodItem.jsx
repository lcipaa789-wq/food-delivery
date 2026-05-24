import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-full mx-auto rounded-2xl shadow-[0px_0px_10px_#00000015] transition-all duration-300 animate-fadeIn  hover:shadow-[0px_0px_20px_#000000020] cursor-pointer">
      <div className="relative  ">
        <img src={image} className="w-full rounded-t-[15px]" />
        {!cartItems[id] ? (
          <img
            className="w-8.75 absolute bottom-3.75 right-3.75 rounded-full "
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-3.75 right-3.75 flex items-center gap-2.5 p-1.5 rounded-full bg-white">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-7.5"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-7.5"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mt-2.5">
          <p className="text-[20px] text-3xl">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-17.5" />
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-[tomato] text-xl font-medium my-2.5">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
