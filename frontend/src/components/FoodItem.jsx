import React from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="w-full mx-auto rounded-2xl shadow-[0px_0px_10px_#00000015] transition-all duration-300 animate-fadeIn">
      <div className="food item img container">
        <img src={image} alt="" className="food item img" />
      </div>
      <div className="food item info">
        <div className="food item name rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food item desc">{description}</p>
        <p className="food item price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
