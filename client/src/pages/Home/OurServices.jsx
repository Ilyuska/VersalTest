import banket from "../../assets/img/ServicesFormochka/banket.png";
import ServicesFormochka from "../../components/ServicesFormochka";
import MyTitle from "../../components/UI/MyTitle";
const OurServices = () => {
  const services = [
    {
      title: "Банкеты>",
      text: "Банкеты - это здорово",
      pict: banket,
    },
    {
      title: "Фуршеты",
      text: "Фуршеты - это здорово",
      pict: banket,
    },
    {
      title: "Кофе-брейки",
      text: "Кофе-брейки - это здорово",
      pict: banket,
    },
    {
      title: "Барбекю",
      text: "Барбекю - это здорово",
      pict: banket,
    },
    {
      title: "Аренда посуды и мебели",
      text: "Аренда посуды и мебели - это здорово",
      pict: banket,
    },
    {
      title: "Доставка еды",
      text: "Доставка еды - это здорово",
      pict: banket,
    },
    {
      title: "Корпоративное питание",
      text: "Корпоративное питание - это здорово",
      pict: banket,
    },
    {
      title: "Обучающие и деловые мероприятия",
      text: "Обучающие и деловые мероприятия - это здорово",
      pict: banket,
    },
  ];
  return (
    <>
      <MyTitle>Наши услуги</MyTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((i, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "justify-self-start" : "justify-self-end"
            } md:justify-self-auto`}
          >
            <ServicesFormochka title={i.title} text={i.text} pict={i.pict} />
          </div>
        ))}
      </div>
    </>
  );
};

export default OurServices;
