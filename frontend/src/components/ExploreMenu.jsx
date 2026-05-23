import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className=" text-2xl text-[#262626] font-medium">Explore menu</h1>
      <p className="max-w-[60%] text-gray-500 ">
        Choose from a diverse menu featuring a delictable array of dishes
        dicrafted with the finest ingredients and culinary expertise, one
        delicious meal at a time
      </p>
      <div className="flex justify-between items-center gap-7.5 text-center my-5 overflow-scroll ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              key={index}
              className="w-[7.5vw] min-w-20 rounded-full transition-all duration-200 cursor-pointer"
            >
              <img
                className={
                  category === item.menu_name
                    ? "border-4 border-[tomato] p-[2px] rounded-full "
                    : ""
                }
                src={item.menu_image}
                alt=""
              />
              <p className="mt-[10px] text-gray-400 text-xl cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2.5 h-0.5 bg-gray-300 border-none" />
    </div>
  );
};

export default ExploreMenu;
