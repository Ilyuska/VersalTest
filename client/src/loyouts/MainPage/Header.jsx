import { useContext } from "react";
import { AuthContext } from "@/context";
import video from "@/assets/video/video.mp4";
import hart from "@/assets/img/banners/hart.png";

import MyNavBar from "./MyNavBar";
import MyLoginForm from "@/components/simple/MyLoginForm";

const Header = ({ settings }) => {
  const { isAuth, login, logout, token } = useContext(AuthContext);

  return (
    <header className="flex justify-center">
      {settings.page == "main" ? (
        <div className="h-screen flex items-center">
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className="object-cover object-center w-full h-full absolute top-0 left-0"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ) : settings.page == "information" ? (
        <div className="h-screen w-screen overflow-hidden">
          <img
            src={settings.pict}
            alt="Header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ) : (
        <div className="h-[12vh] md:h-[15vh] w-screen bg-mainGray"></div>
      )}

      <MyNavBar page={settings.page} />

      {settings.page == "main" ? (
        <div className="absolute h-[85%] flex justify-center md:justify-between items-center top-[15%] text-white px-[10%]">
          <div
            className={`hidden text-xl md:block  ${
              isAuth ? "md:full lg:w-1/2 px-10" : "md:w-1/2"
            }`}
          >
            «Версаль Кейтериг» - победитель ежегодной Всероссийской премии
            «Кейтеринг года» в номинации «Внимание к деталям». Компания «Версаль
            Кейтеринг» предлагает организацию банкетов, фуршетов, мероприятий
            любого формата и уровня.
          </div>
          {isAuth ? (
            <div className="md:hidden absolute flex flex-col items-center w-screen justify-center text-white px-10">
              <img src={hart} alt="hart" />
              <div className="text-2xl md:text-4xl font-semibold text-center my-3">
                Добро пожаловать
              </div>
              <img src={hart} className="rotate-180 " alt="hart" />
            </div>
          ) : (
            <MyLoginForm className="p-5 flex flex-col gap-7 items-center justify-around bg-black bg-opacity-40 rounded-3xl" />
          )}
        </div>
      ) : settings.page == "information" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <img src={hart} alt="hart" />
          <div className="text-2xl md:text-4xl font-semibold text-center my-3">
            {settings.discription}
          </div>
          <img src={hart} className="rotate-180 " alt="hart" />
        </div>
      ) : (
        <></>
      )}
      {settings.page != "others" ? (
        <div
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          className="absolute bottom-5 text-3xl text-white text-opacity-80 font-mono font-extralight pt-2 pb-3 px-5 bg-black bg-opacity-60 text-center rounded-full rotate-90 cursor-pointer border-white border-opacity-60 hover:border"
        >
          {">"}
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
