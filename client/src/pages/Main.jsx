import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/index";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Admin from "./Admin";

const Main = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [cart, setCart] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("auth").length > 0) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      {!isAuth ? (
        <Home />
      ) : localStorage.getItem("auth") === "admin" ? (
        <Admin />
      ) : (
        <Menu />
      )}
    </>
  );
};

export default Main;
