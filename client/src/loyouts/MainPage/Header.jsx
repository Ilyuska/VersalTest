import video from "@/assets/video/video.mp4";
import hart from "@/assets/img/Header/hart.png";

import MyNavBar from "./MyNavBar";
import MyLoginForm from "@/components/UI/MyLoginForm";

const Header = ({ isMainPage, ...props }) => {
  return (
    <header className="flex justify-center">
      {isMainPage ? (
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
      ) : (
        <div className="h-screen w-screen overflow-hidden">
          <img
            src={props.pict}
            alt="Header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      <MyNavBar />

      {isMainPage ? (
        <div className="absolute h-[85%] flex justify-center md:justify-between items-center top-[15%] text-white px-[10%]">
          <div className="hidden text-xl md:block w-1/2">
            «Версаль Кейтериг» - победитель ежегодной Всероссийской премии
            «Кейтеринг года» в номинации «Внимание к деталям». Компания «Версаль
            Кейтеринг» предлагает организацию банкетов, фуршетов, мероприятий
            любого формата и уровня.
          </div>
          <MyLoginForm className="p-5 flex flex-col gap-7 items-center justify-around bg-black bg-opacity-40 rounded-3xl" />
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <img src={hart} alt="hart" />
          <div className="text-2xl md:text-4xl font-semibold text-center my-3">
            {props.discription}
          </div>
          <img src={hart} className="rotate-180 " alt="hart" />
        </div>
      )}
    </header>
  );
};

export default Header;
