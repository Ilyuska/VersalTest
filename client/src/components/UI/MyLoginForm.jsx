import { useState, useContext } from "react";
import { AuthContext } from "../../context/index";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyRegisterForm from "./MyRegisterForm";
import MyModalWindow from "./MyModalWindow";

const MyLoginForm = (props) => {
  const [info, setLogin] = useState({ login: "" });
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [isRegModal, setRegModal] = useState(false);

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
        <div className="text-2xl font-thin ">Войти в аккаунт</div>
        <MyInput
          placeholder="Логин"
          value={info.login}
          onChange={(e) => setLogin({ ...info, login: e.target.value })}
        ></MyInput>
        <div className="h-10 flex justify-center w-full">
          <MyButton click={login}>Войти</MyButton>
        </div>
        <div onClick={() => setRegModal(true)} className="cursor-pointer">
          Регистрация
        </div>
        <MyModalWindow status={isRegModal} setStatus={setRegModal}>
          <MyRegisterForm className="p-5 flex flex-col gap-7 items-center justify-around bg-black bg-opacity-50 rounded-xl" />
        </MyModalWindow>
      </form>
    </>
  );
};

export default MyLoginForm;
