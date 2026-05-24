import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartQuantity } = useContext(StoreContext);
  return (
    <div className="py-5 px-0 flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} className="w-37.5 " />
      </Link>
      <ul className="flex list-none gap-5 text-[#49557e] text-[18px]  ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Home
        </Link>
        <a
          href="/#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Menu
        </a>
        <a
          href="/#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Mobile - app
        </a>
        <a
          href="/#footer"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400"
              : "cursor-pointer hover:text-gray-400"
          }
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative ">
          <Link to="/cart">
            <FiShoppingCart className="text-2xl cursor-pointer hover:text-[tomato] transition-all duration-300" />
            {getTotalCartQuantity() > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getTotalCartQuantity()}
              </div>
            )}
          </Link>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[16px] border border-[tomato] py-2.5 px-7.5 rounded-full cursor-pointer hover:bg-[#fff4f2] hover:scale-105 transition"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
