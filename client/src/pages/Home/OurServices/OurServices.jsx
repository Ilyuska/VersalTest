import banket from "@/assets/img/banners/banquet.png";
import furshet from "@/assets/img/banners/furshet.png";
import coffe from "@/assets/img/banners/coffe.png";
import barbecue from "@/assets/img/banners/barbecue.png";
import dishes from "@/assets/img/banners/dishes.png";
import delivery from "@/assets/img/banners/delivery.png";
import meeting from "@/assets/img/banners/meeting.png";
import bigEvents from "@/assets/img/banners/bigEvents.png";

import ServicesFormochka from "./ServicesFormochka";
import MyTitle from "@/components/UI/MyTitle";

const OurServices = () => {
  const services = [
    {
      title: "Банкеты",
      text: "Банкеты - это здорово",
      pict: banket,
    },
    {
      title: "Фуршеты",
      text: "Фуршеты - это здорово",
      pict: furshet,
    },
    {
      title: "Кофе-брейки",
      text: "Кофе-брейки - это здорово",
      pict: coffe,
    },
    {
      title: "Барбекю",
      text: "Барбекю - это здорово",
      pict: barbecue,
    },
    {
      title: "Аренда посуды и мебели",
      text: "Аренда посуды и мебели - это здорово",
      pict: dishes,
    },
    {
      title: "Доставка еды",
      text: "Доставка еды - это здорово",
      pict: delivery,
    },
    {
      title: "Корпоративное питание",
      text: "Корпоративное питание - это здорово",
      pict: meeting,
    },
    {
      title: "Обучающие и деловые мероприятия",
      text: "Обучающие и деловые мероприятия - это здорово",
      pict: bigEvents,
    },
  ];

  return (
    <>
      <MyTitle>Наши услуги</MyTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((i, index) => (
          <ServicesFormochka title={i.title} text={i.text} pict={i.pict} />
        ))}
      </div>
    </>
  );
};

export default OurServices;
