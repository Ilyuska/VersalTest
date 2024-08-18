import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main";
import Menu from "../../pages/Menu";
import Cart from "../../pages/Cart";
import About from "../../pages/NavBar/About";
import Services from "../../pages/NavBar/Services";
import Projects from "../../pages/NavBar/Projects";
import Trusts from "../../pages/NavBar/Trusts";
import Contacts from "../../pages/NavBar/Contacts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/trusts" element={<Trusts />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
