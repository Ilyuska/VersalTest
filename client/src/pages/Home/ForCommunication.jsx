import { useState } from "react";
import MyImgInLine from "@/components/UI/MyImgInLine";
import PhoneInput from "@/components/UI/PhoneInput";
import mailImg from "@/assets/img/icons/mail.png";
import phoneImg from "@/assets/img/icons/phone.png";
import bg from "@/assets/img/banners/ForCommuniction.png";

const ForCommunication = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");

  const submit = () => {
    console.log(name, "\n", phone, "\n", mail, "\n", comment); //Сюда потом пихнуть проверку на значения и запрос
    setName("");
    setPhone("");
    setMail("");
    setComment("");
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
        <div className="mb-10">
          <div>ТЕЛЕФОН</div>
          <div className="flex">
            <MyImgInLine
              properties="h-7 text-xl my-1"
              pict={phoneImg}
              typee="tel:+73422250636"
              content="+7(342)2250636"
            />
          </div>
        </div>
        <div>
          <div>ПОЧТА</div>
          <div className="flex">
            <MyImgInLine
              properties=" h-7 text-xl my-1"
              pict={mailImg}
              typee="mailto:info@permbanket.ru"
              content="info@permbanket.ru"
            />
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex flex-col w-full md:w-1/2 items-center gap-y-5 bg-black p-7 rounded-3xl bg-opacity-40 text-white"
      >
        <label className="text-2xl font-medium text-center md:hidden">
          Свяжитесь с нами
        </label>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="myInput w-full"
          required
        />
        <PhoneInput phone={phone} setPhone={setPhone} className="w-full" />
        <input
          type="email"
          placeholder="Ваша почта"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="myInput w-full"
          required
        />
        <textarea
          type="text"
          placeholder="Ваш комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="myInput w-full h-64 "
        />
        <button type="submit" className="myButton w-full">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ForCommunication;
