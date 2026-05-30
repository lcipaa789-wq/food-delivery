import React from "react";

const Header = () => {
  return (
    <div
      className="h-[34vw] my-7.5 mx-auto bg-cover bg-center bg-no-repeat relative rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-bold text-white text-6xl">
          Order your favorite food here
        </h2>
        <p className="text-white text-[20px]">
          Choose from a diverse menu featuring a delictable array of dishes
          dicrafted with the finest ingredients and culinary expertise, one
          delicious meal at a time
        </p>
        <button className="text-[#747474] bg-amber-50 rounded-full text-2xl py-[1vw] px-[2.3vw]">
          View menu
        </button>
      </div>
    </div>
  );
};
export default Header;
