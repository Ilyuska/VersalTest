import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/Loyout/Logo.png";
import phone from "../../assets/img/Loyout/phone.png";
import MyImgInLine from "../UI/MyImgInLine";

const MyNavBar = () => {
  return (
    <div className="absolute flex justify-between items-center text-white top-0 left-0 right-0 p-5">
      <div className=" flex justify-between items-center gap-10 text-white">
        <NavLink to={ROUTES.HOME}>
          <img src={logo} alt="Logo" className="h-16 md:h-24 " />
        </NavLink>
        <div className="hidden lg:flex gap-10 text-xl">
          <NavLink to={ROUTES.ABOUT_US}>
            <div>О нас</div>
          </NavLink>
          <NavLink to={ROUTES.SERVICES}>
            <div>Наши услуги</div>
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
      <MyImgInLine
        properties="h-5 text-[1rem] md:h-6  md:text-[1.1rem]"
        pict={phone}
        typee="tel:+73422250636"
        content="+7(342)2250636"
      />
    </div>
  );
};

export default MyNavBar;
