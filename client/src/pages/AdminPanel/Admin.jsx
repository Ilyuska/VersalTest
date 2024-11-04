import { useContext } from "react";
import { AuthContext } from "../../context";
import MyButton from "../../components/UI/MyButton";

const Admin = () => {
  //Отключием кнопку назад
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, null, window.location.href);
  };

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
