import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

import AdminLogin from "./AdminLogin";

import logo from "../../assets/img/Header/Logo.png";

const AdminLoyout = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("auth") == "admin"
  );
  return (
    <>
      {isAdmin ? (
        <>
          <header className="flex justify-between items-center bg-mainGray text-xl font-bold text-white p-3">
            <img src={logo} alt="logo" className="h-20" />
            <NavLink
              to="/admin/menu"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Меню
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Пользователи
            </NavLink>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Заказы
            </NavLink>
            <button
              onClick={() => {
                localStorage.setItem("auth", "");
                setIsAdmin(false);
                navigate("/admin");
              }}
              className="mr-5 hover:text-red-400"
            >
              Выйти
            </button>
          </header>
          <main className="px-[7%]">
            <Outlet />
          </main>
        </>
      ) : (
        <AdminLogin setIsAdmin={setIsAdmin} navigate={navigate} />
      )}
    </>
  );
};

export default AdminLoyout;
