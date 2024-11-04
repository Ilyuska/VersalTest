import banket from "@/assets/img/ServicesFormochka/banquet.png";
import furshet from "@/assets/img/ServicesFormochka/furshet.png";
import coffe from "@/assets/img/ServicesFormochka/coffe.png";
import barbecue from "@/assets/img/ServicesFormochka/barbecue.png";
import dishes from "@/assets/img/ServicesFormochka/dishes.png";
import delivery from "@/assets/img/ServicesFormochka/delivery.png";
import meeting from "@/assets/img/ServicesFormochka/meeting.png";
import bigEvents from "@/assets/img/ServicesFormochka/bigEvents.png";

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
