import { useState, useContext } from "react";
import { AuthContext } from "@/context/index";
import PhoneInput from "../UI/PhoneInput";
import MyCodeForm from "./MyCodeForm";
import { setRegisterCode, completeRegisterCode } from "@/api/MainAPI";

const MyRegisterForm = (props) => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [codeModal, setCodeModal] = useState(false);

  const handleSendCode = async () => {
    try {
      await setRegisterCode(phone);
    } catch (err) {
      setError("Ошибка отправки кода");
    }
  };

  const handleCompliteCode = async () => {
    try {
      await completeRegisterCode(phone, code, name);
      login(localStorage.getItem("token"));
    } catch (err) {
      setError("Ошибка кода");
    }
  };

  return (
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
        <label className="text-2xl font-thin ">Регистрация</label>
        <input
          type="text"
          placeholder="Имя / Компания"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="myInput"
          required
        />
        <PhoneInput phone={phone} setPhone={setPhone} />
        <button type="submit" className="myButton w-full">
          Зарегестрироваться
        </button>
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
  );
};

export default MyRegisterForm;
