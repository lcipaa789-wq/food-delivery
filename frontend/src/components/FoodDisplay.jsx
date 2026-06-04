import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { ClipLoader } from "react-spinners";

const FoodDisplay = ({ category }) => {
  const { food_list, foodLoading } = useContext(StoreContext);
  if (foodLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <ClipLoader size={60} color="#f97316" />

        <h2 className="mt-6 text-2xl font-semibold">Loading menu...</h2>

        <p className="mt-2 text-gray-500">
          Render backend is waking up. Please wait a few seconds.
        </p>
      </div>
    );
  }
  return (
    <div className="mt-7.5 " id="food-display">
      <h2 className="text-[max(2vw, 24px)] text-2xl ">Top dishe near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7.5 mt-7.5 row-y-[50px] ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
