import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/index";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Admin from "./AdminPanel/Admin";

const Main = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth && auth.length > 0) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default Main;
