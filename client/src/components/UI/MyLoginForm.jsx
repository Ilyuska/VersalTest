import { useState, useContext } from "react";
import { AuthContext } from "@/context/index";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyRegisterForm from "./MyRegisterForm";
import MyModalWindow from "./MyModalWindow";

const MyLoginForm = (props) => {
  const { isAuth, login, logout, token } = useContext(AuthContext);
  const [loginState, setLoginState] = useState("");

  const [isRegModal, setRegModal] = useState(false);

  return (
    <>
      {!isAuth ? (
        <form {...props}>
          <div className="text-2xl font-thin ">Войти в аккаунт</div>
          <MyInput
            placeholder="Логин"
            value={loginState}
            onChange={(e) => setLoginState(e.target.value)}
          ></MyInput>
          <div className="h-10 flex justify-center w-full">
            <MyButton click={() => login(loginState)}>Войти</MyButton>
          </div>
          <div onClick={() => setRegModal(true)} className="cursor-pointer">
            Регистрация
          </div>
          <MyModalWindow status={isRegModal} setStatus={setRegModal}>
            <MyRegisterForm className="p-5 flex flex-col gap-7 items-center justify-around bg-black bg-opacity-50 rounded-xl" />
          </MyModalWindow>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyLoginForm;
