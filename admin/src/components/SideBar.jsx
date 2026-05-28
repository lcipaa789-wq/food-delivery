import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 rounded-l-[3px] cursor-pointer bg-[#fff0ed]"
              : "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 rounded-l-[3px] cursor-pointer"
          }
        >
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 rounded-l-[3px] cursor-pointer bg-[#fff0ed]"
              : "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 rounded-l-[3px] cursor-pointer"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 rounded-l-[3px] cursor-pointer bg-[#fff0ed]"
              : "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 rounded-l-[3px] cursor-pointer"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
