import React from "react";
import Header from "../../../components/Loyout/Header";
import Footer from "../../../components/Loyout/Footer";
import MyTitle from "../../../components/UI/MyTitle";
import Formochka from "./Formochka";
import image from "../../../assets/img/Header/Contacts.png";
import worker from "../../../assets/img/Contacts/worker.jpg";

const Contacts = () => {
  const workers = [
    {
      name: "Белин Дмитрий Владимирович",
      post: "Генеральный директор",
      phone: "+7(342) 22 50 636",
    },
    {
      name: "Репина Ольга Вячеславовна",
      post: "Отдел маркетинга",
      phone: "+7(922) 33 088 80",
    },
    {
      name: "Быковская Дарья Григорьевна",
      post: "Договорной отдел",
      phone: "+7(982) 46 733 92",
    },
    {
      name: "Верхоланцева Юлия Сергеевна",
      post: "Техник-технолог",
      phone: "+7(902) 63 77 581",
    },
    {
      name: "Копосова Ольга Михайловна",
      post: "Технический менеджер",
      phone: "+7(982) 47 23 085",
    },
  ];

  return (
    <>
      <Header isMainPage={false} pict={image} discription="Контакты" />
      <MyTitle>Наши контакты</MyTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-[7%] mb-20 ">
        {workers.map((i) => (
          <Formochka
            pict={worker}
            name={i.name}
            post={i.post}
            phone={i.phone}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Contacts;
