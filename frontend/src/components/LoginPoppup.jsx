import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPoppup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid">
      <form
        className="place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-6 p-7.5 rounded-lg text-[14px] animate-fadein "
        action=""
      >
        <div className="flex justify-between items-center text-black">
          <h2>{currState}</h2>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className=" outline-none p-[10px] border border-[#c9c9c9] rounded "
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            className=" outline-none p-[10px]  border border-[#c9c9c9] rounded"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className=" outline-none p-[10px]  border border-[#c9c9c9] rounded"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="border-none px-5 py-2 rounded text-white bg-orange-500 text-sm hover:bg-orange-600 transition-all cursor-pointer">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-2 -mt-3.75">
          <input className="mt-1" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurrState("Sign in")}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPoppup;
