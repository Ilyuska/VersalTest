import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLoyout from "../loyouts/MainPage/MainLoyout";
import Home from "@/pages/Home/Home";
import Menu from "@/pages/Menu/Menu";
// import Cart from "@/pages/Menu/Cart";
import OurProjects from "@/pages/NavBar/OurProjects";
import Trusts from "@/pages/NavBar/Trusts";
import Contacts from "@/pages/NavBar/Contacts/Contacts";
import Admin from "@/pages/AdminPanel/Admin";

const AppRoutes = () => {
  const [isMainPage, setIsMainPage] = useState(true);
  const [headerPict, setHeaderPict] = useState({ pict: "", discription: "" });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLoyout
            isMainPage={isMainPage}
            pict={headerPict.pict}
            discription={headerPict.discription}
          />
        }
      >
        <Route index element={<Home setIsMainPage={setIsMainPage} />} />
        <Route
          path="/projects"
          element={
            <OurProjects
              setIsMainPage={setIsMainPage}
              setHeaderPict={setHeaderPict}
            />
          }
        />
        <Route
          path="/trusts"
          element={
            <Trusts
              setIsMainPage={setIsMainPage}
              setHeaderPict={setHeaderPict}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <Contacts
              setIsMainPage={setIsMainPage}
              setHeaderPict={setHeaderPict}
            />
          }
        />

        {/* <Route path="/cart" element={<Cart setIsMainPage={setIsMainPage} setHeaderPict={setHeaderPict}/>} /> */}
      </Route>
      <Route path="/menu" element={<Menu />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
