import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartQuantity, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <div className="relative py-5 px-0">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={assets.logo2} className="w-30" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex list-none gap-5 text-[#49557e] text-[18px]">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400" : "cursor-pointer hover:text-gray-400"}
          >
            Home
          </Link>
          <a
            href="/#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400" : "cursor-pointer hover:text-gray-400"}
          >
            Menu
          </a>
          <a
            href="/#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400" : "cursor-pointer hover:text-gray-400"}
          >
            Mobile - app
          </a>
          <a
            href="/#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "pb-2 border-b-2 cursor-pointer hover:text-gray-400" : "cursor-pointer hover:text-gray-400"}
          >
            Contact Us
          </a>
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-5 md:gap-10">
          <img src={assets.search_icon} alt="" className="hidden md:block" />

          <div className="relative">
            <Link to="/cart">
              <FiShoppingCart className="text-2xl cursor-pointer hover:text-[tomato] transition-all duration-300" />
              {getTotalCartQuantity() > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalCartQuantity()}
                </div>
              )}
            </Link>
          </div>

          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="hidden md:block bg-transparent text-[16px] border border-[tomato] py-2.5 px-7.5 rounded-full cursor-pointer hover:bg-[#fff4f2] hover:scale-105 transition"
            >
              Sign in
            </button>
          ) : (
            <div className="relative group">
              <img src={assets.profile_icon} alt="" className="w-8 cursor-pointer" />
              <ul className="absolute right-0 z-10 hidden w-37.5 flex-col gap-2 rounded border border-gray-200 bg-white p-3 shadow-lg group-hover:flex">
                <li onClick={() => navigate("/myorders")} className="flex cursor-pointer items-center gap-2 hover:text-[tomato]">
                  <img src={assets.bag_icon} alt="" className="w-5" />
                  <p>Orders</p>
                </li>
                <hr className="h-px border-none bg-gray-200" />
                <li onClick={logout} className="flex cursor-pointer items-center gap-2 hover:text-[tomato]">
                  <img src={assets.logout_icon} alt="" className="w-5" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}

          {/* Hamburger toggle */}
          <button
            className="md:hidden text-2xl text-[#49557e]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 border-t mt-3 text-[#49557e] text-[17px]">
          <Link to="/" onClick={() => { setMenu("home"); closeMobile(); }} className="hover:text-gray-400">Home</Link>
          <a href="/#explore-menu" onClick={() => { setMenu("menu"); closeMobile(); }} className="hover:text-gray-400">Menu</a>
          <a href="/#app-download" onClick={() => { setMenu("mobile-app"); closeMobile(); }} className="hover:text-gray-400">Mobile - app</a>
          <a href="/#footer" onClick={() => { setMenu("contact-us"); closeMobile(); }} className="hover:text-gray-400">Contact Us</a>
          {!token && (
            <button
              onClick={() => { setShowLogin(true); closeMobile(); }}
              className="self-start bg-transparent text-[16px] border border-[tomato] py-2 px-6 rounded-full cursor-pointer hover:bg-[#fff4f2] transition"
            >
              Sign in
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
