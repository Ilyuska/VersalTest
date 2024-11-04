import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main";
import Menu from "../../pages/Menu/Menu";
import Cart from "../../pages/Menu/Cart";
import OurProjects from "../../pages/NavBar/OurProjects";
import Trusts from "../../pages/NavBar/Trusts";
import Contacts from "../../pages/NavBar/Contacts/Contacts";
import Admin from "../../pages/AdminPanel/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<OurProjects />} />
      <Route path="/trusts" element={<Trusts />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
