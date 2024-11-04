import { useState } from "react";
import MyInput from "@/components/UI/MyInput";
import MyTextArea from "@/components/UI/MyTextArea";
import MyButton from "@/components/UI/MyButton";
import MyImgInLine from "@/components/UI/MyImgInLine";
import mail from "@/assets/img/Footer/mail.png";
import phone from "@/assets/img/Footer/phone.png";
import bg from "@/assets/img/ForCommuniction/ForCommuniction.png";

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
    <div
      className="flex py-10 px-8 mt-20 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%", // Полная высота экрана
      }}
    >
      <div className="w-1/2 hidden md:block text-white">
        <div className="text-4xl font-bold mb-10">Свяжитесь с нами</div>
        <div className="text-lg mb-10 w-5/6">
          «Версаль Кейтериг» - член Ассоциации Кейтерингов и Банкетных служб, а
          так же кейтериг номер в Перми и Пермском крае.
        </div>
        <div className="mb-10 ">
          <div>ТЕЛЕФОН</div>
          <MyImgInLine
            properties="h-7 text-xl my-1"
            pict={phone}
            typee="tel:+73422250636"
            content="+7(342)2250636"
          />
        </div>
        <div>
          <div>ПОЧТА</div>
          <MyImgInLine
            properties="h-7 text-xl my-1"
            pict={mail}
            typee="mailto:info@permbanket.ru"
            content="info@permbanket.ru"
          />
        </div>
      </div>
      <form className="flex flex-col w-full md:w-1/2 items-center gap-y-5 bg-black py-7 rounded-3xl bg-opacity-40">
        <div className=" text-white text-2xl font-medium text-center md:hidden">
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
        <div className="h-12 flex justify-center w-full">
          <MyButton click={submit}>Отправить</MyButton>
        </div>
      </form>
    </div>
  );
};

export default ForCommunication;
