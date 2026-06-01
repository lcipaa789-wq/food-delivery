import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="mx-auto mt-25 text-3xl text-center font-medium"
      id="app-download"
    >
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <img
          src={assets.play_store}
          alt=""
          className="w-45 cursor-pointer hover:scale-105 transition-all duration-300 "
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-45 cursor-pointer hover:scale-105 transition-all duration-300 "
        />
      </div>
    </div>
  );
};

export default AppDownload;
