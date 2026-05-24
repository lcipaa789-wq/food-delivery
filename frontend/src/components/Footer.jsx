import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div id="footer">
      <footer
        className="
      mt-25
      bg-[#323232]
      text-[#d9d9d9]
      px-[8vw]
      pt-20
      pb-5
      "
      >
        <div
          className="
        grid
        grid-cols-[2fr_1fr_1fr]
        gap-20
        "
        >
          <div className="flex flex-col gap-5">
            <img src={assets.logo} alt="" className="w-37.5" />

            <p className="text-[15px] leading-6">
              Delicious food delivered fast to your doorstep. Explore a wide
              variety of meals crafted with fresh ingredients and premium
              quality.
            </p>

            <div className="flex gap-3.75">
              <img
                src={assets.facebook_icon}
                alt=""
                className="w-8.75 cursor-pointer hover:scale-110 transition-all duration-300"
              />

              <img
                src={assets.twitter_icon}
                alt=""
                className="w-8.75 cursor-pointer hover:scale-110 transition-all duration-300"
              />

              <img
                src={assets.linkedin_icon}
                alt=""
                className="w-8.75 cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-white text-[24px] font-semibold">Company</h2>

            <ul className="flex flex-col gap-2.5">
              <li className="cursor-pointer hover:text-[tomato] transition-all">
                Home
              </li>

              <li className="cursor-pointer hover:text-[tomato] transition-all">
                About us
              </li>

              <li className="cursor-pointer hover:text-[tomato] transition-all">
                Delivery
              </li>

              <li className="cursor-pointer hover:text-[tomato] transition-all">
                Privacy policy
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-white text-[24px] font-semibold">
              Get In Touch
            </h2>

            <ul className="flex flex-col gap-2.5">
              <li>+1-234-567-890</li>
              <li>contact@fooddelivery.com</li>
            </ul>
          </div>
        </div>

        <hr className="my-7.5 border-none h-px bg-gray-500" />

        <p className="text-center text-[14px]">
          Copyright 2026 © Food Delivery - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
