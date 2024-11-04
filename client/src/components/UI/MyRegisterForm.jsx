import { useState, useContext } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import { AuthContext } from "../../context/index";

const MyRegisterForm = (props) => {
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
        <div className="text-2xl font-thin ">Регистрация</div>
        <MyInput
          placeholder="Логин"
          value={info.login}
          onChange={(e) => setLogin({ ...info, login: e.target.value })}
        ></MyInput>
        <div className="h-10 flex justify-center w-full">
          <MyButton click={login}>Зарегестрироваться</MyButton>
        </div>
      </form>
    </>
  );
};

export default MyRegisterForm;
