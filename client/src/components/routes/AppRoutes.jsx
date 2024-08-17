import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main";
import Menu from "../../pages/Menu";
import Cart from "../../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
