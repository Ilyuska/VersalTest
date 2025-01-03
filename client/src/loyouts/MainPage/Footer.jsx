import { NavLink } from "react-router-dom";
import MyImgInLine from "@/components/UI/MyImgInLine";
import logo from "@/assets/img/logos/Logo.png";
import phone from "@/assets/img/icons/phone.png";
import mail from "@/assets/img/icons/mail.png";
import inst from "@/assets/img/icons/instagram.png";
import tg from "@/assets/img/icons/tg.png";
import vk from "@/assets/img/icons/vk.png";

const Footer = () => {
  return (
    <div className="p-5 bg-neutral-900 flex text-white flex-col md:flex-row ">
      <div className=" md:w-5/12 md:block">
        <img
          src={logo}
          alt="logo"
          className="mx-auto w-[70%] md:h-1/3 md:w-auto md:mx-0 mb-5"
        />
        <div className="hidden h-1/2 md:flex w-1/4 justify-between">
          <MyImgInLine
            properties="h-5 text-[1rem]  md:h-6  md:text-[1.1rem]  mb-1 md:mb-2 "
            pict={inst}
            typee="#"
            content=""
          />
          <MyImgInLine
            properties="h-5 text-[1rem]  md:h-6  md:text-[1.1rem]  mb-1 md:mb-2 "
            pict={tg}
            typee="https://t.me/permbanket"
            content=" "
          />
          <MyImgInLine
            properties="h-5 text-[1rem]  md:h-6  md:text-[1.1rem]  mb-1 md:mb-2 "
            pict={vk}
            typee="https://vk.com/versalperm"
            content=""
          />
        </div>
      </div>
      <div className="flex justify-around md:w-7/12 ">
        <div className="flex flex-col  md:w-2/3">
          <div className="font-bold text-[18px] mb-3">Полезные ссылки</div>
          <NavLink to="/menu" className="md:mr-3 mb-1 md:mb-2">
            Заказать банкет
          </NavLink>
          <NavLink to="/projects" className="md:mr-3 mb-1 md:mb-2">
            Наши проекты
          </NavLink>
          <NavLink to="/trusts" className="md:mr-3 mb-1 md:mb-2">
            Нам доверяют
          </NavLink>
          <NavLink to="/contacts" className="md:mr-3 mb-1 md:mb-2">
            Контакты
          </NavLink>
        </div>
        <div className=" md:w-1/3 ">
          <div className="font-bold text-[18px] mb-3">Контакты</div>
          <div className="flex">
            <MyImgInLine
              properties="h-5 text-[0.9rem]  md:h-6   mb-1 md:mb-2"
              pict={phone}
              typee="tel:+73422250636"
              content="+7(342)2250636"
            />
          </div>
          <div className="flex">
            <MyImgInLine
              properties="h-5 text-[0.9rem] md:h-5  mb-1 md:mb-2"
              pict={mail}
              typee="mailto:info@permbanket.ru"
              content="info@permbanket.ru"
            />
          </div>

          <div className="flex md:hidden">
            <MyImgInLine
              properties="h-5 text-[1rem]  md:h-6 mb-1 md:mb-2"
              pict={inst}
              typee="#"
              content=""
            />
            <MyImgInLine
              properties="h-5 text-[1rem]  md:h-6  md:text-[1.1rem]  mb-1 md:mb-2"
              pict={tg}
              typee="https://t.me/permbanket"
              content=" "
            />
            <MyImgInLine
              properties="h-5 text-[1rem]  md:h-6  md:text-[1.1rem]  mb-1 md:mb-2 target"
              pict={vk}
              typee="https://vk.com/versalperm"
              content=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
