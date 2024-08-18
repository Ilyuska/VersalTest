import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/Loyout/Logo.png";

const MyNavBar = () => {
  return (
    <div className="absolute flex justify-between top-0 left-0 right-0 text-white">
      <NavLink to={ROUTES.HOME}>
        <img src={logo} alt="Logo" className="h-16 md:h-24 m-5" />
      </NavLink>
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
  );
};

export default MyNavBar;
