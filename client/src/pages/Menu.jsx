import { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../components/UI/MyButton";

const Menu = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const exit = () => {
    console.log("Вы вышли");
    setIsAuth(false);
    localStorage.setItem("auth", "");
  };
  return (
    <>
      <div>User</div>
      <MyButton click={exit}>ВЫЙТИ</MyButton>
    </>
  );
};

export default Menu;
