import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="py-5 px-0 flex justify-between items-center">
      <img src={assets.logo} className="w-37.5 " />
      <ul className="flex list-none gap-5 text-[#49557e] text-[18px]  ">
        <li
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Mobile - app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Contact Us
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative ">
          <FiShoppingCart className="text-2xl cursor-pointer hover:text-[tomato] transition-all duration-300" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </div>
        </div>
        <button className="bg-transparent text-[16px] border border-[tomato] py-2.5 px-7.5 rounded-full cursor-pointer hover:bg-[#fff4f2] hover:scale-105 transition">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
