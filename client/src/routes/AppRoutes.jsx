import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLoyout from "@/loyouts/MainPage/MainLoyout";
import Home from "@/pages/Home/Home";

import OurProjects from "@/pages/NavBar/OurProjects";
import Trusts from "@/pages/NavBar/Trusts";
import Contacts from "@/pages/NavBar/Contacts";

import Menu from "@/pages/Menu/Menu";
import Cart from "@/pages/Cart/Cart";
import Orders from "@/pages/Profile/Orders";

import AdminLoyout from "@/loyouts/AdminPage/AdminLoyout";
import AdminMenu from "@/pages/AdminPanel/AdminMenu/AdminMenu";
import AdminOrders from "@/pages/AdminPanel/AdminOrders/AdminOrders";
import AdminUsers from "@/pages/AdminPanel/AdminUsers/AdminUsers";

import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const [headerSettings, setHeaderSettings] = useState({
    page: "", //main, information, others (menu, cart)
    pict: "",
    discription: "",
  });

  return (
    <Routes>
      <Route path="/" element={<MainLoyout settings={headerSettings} />}>
        <Route index element={<Home setHeaderSettings={setHeaderSettings} />} />
        <Route
          path="/projects"
          element={<OurProjects setHeaderSettings={setHeaderSettings} />}
        />
        <Route
          path="/trusts"
          element={<Trusts setHeaderSettings={setHeaderSettings} />}
        />
        <Route
          path="/contacts"
          element={<Contacts setHeaderSettings={setHeaderSettings} />}
        />
        <Route
          path="/menu"
          element={<Menu setHeaderSettings={setHeaderSettings} />}
        />
        <Route
          path="/cart"
          element={<Cart setHeaderSettings={setHeaderSettings} />}
        />
        <Route
          path="/orders"
          element={<Orders setHeaderSettings={setHeaderSettings} />}
        ></Route>
        <Route path="*" element={<NotFound page="others" />} />
      </Route>

      <Route path="/admin" element={<AdminLoyout />}>
        <Route path="/admin/menu" element={<AdminMenu />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="*" element={<NotFound page="admin" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
