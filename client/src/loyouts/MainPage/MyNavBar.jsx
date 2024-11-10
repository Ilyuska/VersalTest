import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import logo from "@/assets/img/Header/Logo.png";
import phone from "@/assets/img/Footer/phone.png";
import enter from "@/assets/img/Header/enter.png";
import burger from "@/assets/img/Header/burger_menu.png";
import MyImgInLine from "@/components/UI/MyImgInLine";
import MyBurgerMenu from "@/components/UI/MyBurgerMenu";
import MyModalWindow from "@/components/UI/MyModalWindow";
import MyLoginForm from "@/components/UI/MyLoginForm";

const MyNavBar = () => {
  const [isBurgerStatus, setBurgerStatus] = useState(false);
  const [isLogModal, setLogModal] = useState(false);

  return (
    <div className="absolute flex justify-between items-center text-white top-0 left-0 right-0 p-5 pr-0 lg:pr-5 z-10">
      <div className=" flex justify-between items-center gap-10 text-white">
        <NavLink to={ROUTES.HOME}>
          <img src={logo} alt="Logo" className="h-16 md:h-24 " />
        </NavLink>
        <div className="hidden lg:flex gap-8 text-xl">
          <NavLink to={ROUTES.MENU}>
            <div>Заказать банкет</div>
          </NavLink>
          <NavLink to={ROUTES.PROJECTS}>
            <div>Наши проекты</div>
          </NavLink>
          <NavLink to={ROUTES.TRUSTS}>
            <div>Нам доверяют</div>
          </NavLink>
          <NavLink to={ROUTES.CONTACTS}>
            <div>Контакты</div>
          </NavLink>
        </div>
      </div>
      <div className="flex gap-5">
        <MyImgInLine
          properties="hidden lg:flex h-6 text-[1.1rem]"
          pict={phone}
          typee="tel:+73422250636"
          content="+7(342)2250636"
        />
        <div>
          <img
            onClick={() => setLogModal(true)}
            src={enter}
            alt="enter"
            className="h-5 md:h-6 mt-2 lg:mt-0 cursor-pointer"
          />
          <MyModalWindow status={isLogModal} setStatus={setLogModal}>
            <MyLoginForm className="p-5 flex flex-col gap-7 items-center justify-around bg-black bg-opacity-50 rounded-xl" />
          </MyModalWindow>
        </div>
        <div className="lg:hidden bg-mainGray rounded-l-lg">
          <img
            onClick={() => setBurgerStatus(true)}
            className="h-5 md:h-6 cursor-pointer m-2"
            src={burger}
            alt="burgerMenu"
          />
          <MyBurgerMenu
            status={isBurgerStatus}
            setStatus={setBurgerStatus}
            burger={burger}
          >
            <NavLink to={ROUTES.MENU}>
              <div>Заказать банкет</div>
            </NavLink>
            <NavLink to={ROUTES.PROJECTS}>
              <div>Наши проекты</div>
            </NavLink>
            <NavLink to={ROUTES.TRUSTS}>
              <div>Нам доверяют</div>
            </NavLink>
            <NavLink to={ROUTES.CONTACTS}>
              <div>Контакты</div>
            </NavLink>
          </MyBurgerMenu>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;
