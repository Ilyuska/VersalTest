import { useContext, useState } from "react";
import { AuthContext } from "../context/index";
import Home from "./Home/Home";
import Menu from "./Menu";

const Main = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [cart, setCart] = useState(0);
  return <>{!isAuth ? <Home /> : <Menu />}</>;
};

export default Main;
