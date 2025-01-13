import { useState, useContext } from "react";
import { AuthContext } from "@/context/index";
import PhoneInput from "../UI/PhoneInput";
import MyRegisterForm from "./MyRegisterForm";
import MyModal from "./MyModal/MyModal";
import MyCodeForm from "./MyCodeForm";
import { setLoginCode, completeLoginCode } from "@/api/MainAPI";

const MyLoginForm = (props) => {
  const { isAuth, login } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [codeModal, setCodeModal] = useState(false);

  const [isRegModal, setRegModal] = useState(false);

  const handleSendCode = async () => {
    try {
      await setLoginCode(phone);
    } catch (err) {
      setError("Ошибка отправки кода");
    }
  };

  const handleCompliteCode = async () => {
    try {
      await completeLoginCode(phone, code);
      login(localStorage.getItem("token"));
    } catch (err) {
      setError("Ошибка кода");
    }
  };

  return (
    <>
      {!isAuth ? (
        <>
          <form
            {...props}
            onSubmit={(e) => {
              e.preventDefault();
              if (phone.length > 16) {
                setCodeModal(true);
                handleSendCode();
              }
            }}
          >
            <div className="text-2xl font-thin ">Войти в аккаунт</div>
            <PhoneInput phone={phone} setPhone={setPhone} />
            <button type="submit" className="myButton">
              Войти
            </button>
            <div onClick={() => setRegModal(true)} className="cursor-pointer">
              Регистрация
            </div>
            <MyModal status={isRegModal} setStatus={setRegModal}>
              <MyRegisterForm className="p-5 flex flex-col gap-5 items-center justify-around  rounded-xl" />
            </MyModal>
          </form>
          <MyCodeForm
            status={codeModal}
            setStatus={setCodeModal}
            code={code}
            setCode={setCode}
            phone={phone}
            compliteCode={handleCompliteCode}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyLoginForm;
