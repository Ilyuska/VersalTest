import video from "../../assets/video/video.mp4";

import MyNavBar from "./MyNavBar";
import MyLoginForm from "../UI/MyLoginForm";

const Header = ({ isMainPage }) => {
  return (
    <header className="flex justify-center">
      {isMainPage ? (
        <div className="h-screen flex items-center">
          <video
            autoPlay
            loop
            muted
            className="object-cover object-center w-full h-full absolute top-0 left-0"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ) : (
        <></>
      )}
      <MyNavBar />

      {isMainPage ? (
        <div className="absolute h-[85%] flex justify-center md:justify-between items-center top-[15%] text-white px-[10%]">
          <div className="hidden text-xl md:block w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            consequatur in, rerum eaque fugit perferendis dolorum fuga obcaecati
            voluptate dicta quia quae aperiam, veniam alias nisi quam a.
            Mollitia?
          </div>
          <MyLoginForm className="p-5 h-[50%] flex flex-col items-center justify-around bg-black bg-opacity-40 rounded-3xl" />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
