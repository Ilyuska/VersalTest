import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div className="flex">
      <NavLink to="/menu">Меню</NavLink>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/orders">Заказы</NavLink>
    </div>
  );
};

export default AdminNavBar;
