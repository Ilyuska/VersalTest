import { useState } from "react";
import MyInput from "../../components/UI/MyInput";
import MyTextArea from "../../components/UI/MyTextArea";
import MyButton from "../../components/UI/MyButton";

const ForCommunication = () => {
  const [forma, setForma] = useState({
    name: "",
    tel: "",
    mail: "",
    comment: "",
  });

  const submit = () => {
    console.log(forma); //Сюда потом пихнуть проверку на значения и запрос
    setForma({
      name: "",
      tel: "",
      mail: "",
      comment: "",
    });
  };

  return (
    <div className="flex bg-mainGray py-10 px-8">
      <div className="w-1/2 hidden md:block">
        <div className="text-white text-4xl font-bold mb-10">
          Свяжитесь с нами
        </div>
        <div className="text-white text-lg mb-10 w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, rerum quas ullam tempore fugiat inventore eaque
          laborum.
        </div>
        <div>
          <div>ТЕЛЕФОН</div>
          <div>88005553535</div>
        </div>
        <div>
          <div>ПОЧТА</div>
          <div>scam@mail.ru</div>
        </div>
      </div>
      <form className="flex flex-col w-full md:w-1/2 items-center gap-y-5">
        <div className="text-white text-2xl font-medium text-center md:hidden">
          Свяжитесь с нами
        </div>
        <MyInput
          placeholder="Ваше имя"
          value={forma.name}
          onChange={(e) => setForma({ ...forma, name: e.target.value })}
        />
        <MyInput
          placeholder="Ваш телефон"
          value={forma.tel}
          onChange={(e) => setForma({ ...forma, tel: e.target.value })}
        />
        <MyInput
          placeholder="Ваша почта"
          value={forma.mail}
          onChange={(e) => setForma({ ...forma, mail: e.target.value })}
        />
        <MyTextArea
          placeholder="Ваш комментарий"
          value={forma.comment}
          onChange={(e) => setForma({ ...forma, comment: e.target.value })}
        />
        <MyButton click={submit}>Отправить</MyButton>
      </form>
    </div>
  );
};

export default ForCommunication;
