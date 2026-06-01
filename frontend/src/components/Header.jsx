const Header = () => {
  return (
    <div
      className="h-[55vw] sm:h-[45vw] md:h-[34vw] my-7.5 mx-auto bg-cover bg-center bg-no-repeat relative rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[85%] md:max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-bold text-white text-2xl sm:text-4xl md:text-6xl">
          Order your favorite food here
        </h2>
        <p className="text-white text-[11px] sm:text-[15px] md:text-[20px]">
          Choose from a diverse menu featuring a delictable array of dishes
          dicrafted with the finest ingredients and culinary expertise, one
          delicious meal at a time
        </p>
        <button className="text-[#747474] bg-amber-50 rounded-full text-sm sm:text-lg md:text-2xl py-1.5 px-4 md:py-[1vw] md:px-[2.3vw]">
          View menu
        </button>
      </div>
    </div>
  );
};
export default Header;
