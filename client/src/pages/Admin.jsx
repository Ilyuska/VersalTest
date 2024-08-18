import { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../components/UI/MyButton";

const Admin = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const exit = () => {
    console.log("Вы вышли");
    setIsAuth(false);
    localStorage.setItem("auth", "");
  };
  return (
    <>
      <div>Admin</div>
      <MyButton click={exit}>ВЫЙТИ</MyButton>
    </>
  );
};

export default Admin;
