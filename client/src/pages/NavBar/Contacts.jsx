import { useEffect } from "react";
import MyTitle from "@/components/UI/MyTitle";
import image from "@/assets/img/banners/Contacts.png";
import worker from "@/assets/img/banners/worker.jpg";

const Contacts = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({
      page: "information",
      pict: image,
      discription: "Контакты",
    });
  }, [setHeaderSettings]);

  const workers = [
    {
      pict: worker,
      name: "Белин Дмитрий Владимирович",
      post: "Генеральный директор",
      phone: "+7(342) 22 50 636",
    },
    {
      pict: worker,
      name: "Репина Ольга Вячеславовна",
      post: "Отдел маркетинга",
      phone: "+7(922) 33 088 80",
    },
    {
      pict: worker,
      name: "Быковская Дарья Григорьевна",
      post: "Договорной отдел",
      phone: "+7(982) 46 733 92",
    },
    {
      pict: worker,
      name: "Верхоланцева Юлия Сергеевна",
      post: "Техник-технолог",
      phone: "+7(902) 63 77 581",
    },
    {
      pict: worker,
      name: "Копосова Ольга Михайловна",
      post: "Технический менеджер",
      phone: "+7(982) 47 23 085",
    },
  ];

  return (
    <>
      <MyTitle>Наши контакты</MyTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-[7%] mb-20 ">
        {workers.map((i) => (
          <div className="flex flex-col w-full rounded-lg  bg-slate-300 pb-3">
            <img src={i.pict} alt={i.post} className="rounded-t-lg " />
            <div className="text-lg font-semibold px-4 md:px-1 lg:px-3">
              {i.name}
            </div>
            <div className="px-4 md:px-1 lg:px-3">{i.post}</div>
            <a className="px-4 md:px-1 lg:px-3" href={`tel:${i.phone}`}>
              {i.phone}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
