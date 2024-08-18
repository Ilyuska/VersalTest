import { useState, useContext } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import { AuthContext } from "../../context/index";

const MyLoginForm = (props) => {
  const [info, setLogin] = useState({ login: "", password: "" });
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = () => {
    console.log(info);
    console.log("Вы вошли");
    setIsAuth(true);
    localStorage.setItem("auth", "user");
    if (info.login == "admin") {
      localStorage.setItem("auth", "admin");
    }
  };
  return (
    <>
      <form {...props}>
        <MyInput
          placeholder="Логин"
          value={info.login}
          onChange={(e) => setLogin({ ...info, login: e.target.value })}
        ></MyInput>
        <MyInput
          placeholder="Пароль"
          type="password"
          value={info.password}
          onChange={(e) => setLogin({ ...info, password: e.target.value })}
        ></MyInput>
        <MyButton click={login}>Войти</MyButton>
        <div>Регистрация</div>
        <div>Забыли пароль?</div>
      </form>
    </>
  );
};

export default MyLoginForm;
