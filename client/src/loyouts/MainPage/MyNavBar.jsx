import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/index";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import logo from "@/assets/img/Header/Logo.png";
import phone from "@/assets/img/Footer/phone.png";
import enter from "@/assets/img/Header/enter.png";
import user from "@/assets/img/Header/user.png";
import cart from "@/assets/img/Header/cart.png";
import burger from "@/assets/img/Header/burger_menu.png";
import MyImgInLine from "@/components/UI/MyImgInLine";
import MyBurgerMenu from "@/components/UI/MyBurgerMenu";
import MyBurgerUser from "@/components/UI/MyBurgerUser";
import MyModalWindow from "@/components/UI/MyModalWindow";
import MyLoginForm from "@/components/UI/MyLoginForm";
import MyModalForProfile from "@/components/UI/MyModalWindowUpdate/MyModalForProfile";

const MyNavBar = ({ page }) => {
  const { isAuth, login, logout, token } = useContext(AuthContext);
  const [isBurgerStatus, setBurgerStatus] = useState(false); //Открытие, закрытие бургер меню
  const [isLogModal, setLogModal] = useState(false); //Открытие, закрытие модалки со входом
  const [isUserBurger, setUserBurger] = useState(false); //Открытие, закрытие модального окна с полями "Профиль", "Мои заказы", "Выйти"
  const [isProfileModal, setProfileModal] = useState(false);

  return (
    <div className="absolute flex justify-between items-center text-white top-0 left-0 right-0 p-5 pr-0 lg:pr-5 z-10">
      {/*Отрисовка базовой навигации без бургера*/}
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

      <div className="flex gap-4">
        {/*В завимимости от страницы отрисовка карзины или номера телефона*/}
        {page != "others" ? (
          <MyImgInLine
            properties="hidden lg:flex h-6 mt-[6px] text-[1.1rem]"
            pict={phone}
            typee="tel:+73422250636"
            content="+7(342)2250636"
          />
        ) : (
          <NavLink
            to={isAuth ? "/cart" : "#"}
            onClick={(e) => {
              if (!isAuth) {
                e.preventDefault(); // Блокируем переход
                setLogModal(true); // Открываем модалку
              }
            }}
          >
            <img
              src={cart}
              alt="cart"
              className="h-7 mt-2 md:mt-[6px] lg:h-10 lg:mr-2 lg:mt-0 cursor-pointer "
            />
          </NavLink>
        )}

        {/*В завимимости от авторизован пользователь или нет отрисовка аватарки или кнопки для входа*/}
        {isAuth ? (
          <div className="relative">
            <img
              onClick={() => setUserBurger(!isUserBurger)}
              src={user}
              alt="user"
              className="hidden lg:flex h-6 lg:h-10 mt-2 lg:mt-0 cursor-pointer"
            />
            <MyBurgerUser
              status={isUserBurger}
              setStatus={setUserBurger}
              logout={logout}
            />
          </div>
        ) : (
          <>
            <img
              onClick={() => setLogModal(true)}
              src={enter}
              alt="enter"
              className="h-6 mt-2 md:h-7 md:mr-2 lg:mt-0 cursor-pointer"
            />
            <MyModalWindow status={isLogModal} setStatus={setLogModal}>
              <MyLoginForm className="p-5 flex flex-col gap-7 items-center justify-around bg-black bg-opacity-50 rounded-xl" />
            </MyModalWindow>
          </>
        )}

        {/*Реализация BurgerMenu*/}
        <div className="lg:hidden bg-mainGray rounded-l-lg border border-r-0">
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
            {isAuth ? (
              <>
                <div onClick={() => setProfileModal(true)}>Профиль</div>
                <MyModalForProfile
                  status={isProfileModal}
                  setStatus={setProfileModal}
                  title="Редактировать профиль"
                />
                <NavLink
                  to={isAuth ? "/orders" : ""}
                  onClick={(e) => {
                    setBurgerStatus(false);
                    if (!isAuth) {
                      e.preventDefault();
                      setLogModal(true);
                    }
                  }}
                >
                  <div>Мои заказы</div>
                </NavLink>{" "}
              </>
            ) : (
              <></>
            )}

            <NavLink to="/menu" onClick={() => setBurgerStatus(false)}>
              <div>Заказать банкет</div>
            </NavLink>
            <NavLink to="/projects" onClick={() => setBurgerStatus(false)}>
              <div>Наши проекты</div>
            </NavLink>
            <NavLink to="/trusts" onClick={() => setBurgerStatus(false)}>
              <div>Нам доверяют</div>
            </NavLink>
            <NavLink to="/contacts" onClick={() => setBurgerStatus(false)}>
              <div>Контакты</div>
            </NavLink>
            {isAuth ? (
              <NavLink
                to="/"
                onClick={() => {
                  setBurgerStatus(false);
                  logout();
                }}
              >
                Выйти
              </NavLink>
            ) : (
              <></>
            )}
          </MyBurgerMenu>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;
