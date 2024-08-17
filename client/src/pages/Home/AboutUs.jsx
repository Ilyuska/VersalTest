import about from "../../assets/img/About.png";
import pictForm1 from "../../assets/img/AboutFormochka/Pluses1.png";
import pictForm2 from "../../assets/img/AboutFormochka/Pluses2.png";
import pictForm3 from "../../assets/img/AboutFormochka/Pluses3.png";
import pictForm4 from "../../assets/img/AboutFormochka/Pluses4.png";
import pictForm5 from "../../assets/img/AboutFormochka/Pluses5.png";

import AboutFormochka from "../../components/AboutFormochka";
import MyTitle from "../../components/UI/MyTitle";

const AboutUs = () => {
  const formochki = [
    {
      title: "Масштабность",
      text: "проводим мероприятия до 3500 человек",
      pict: pictForm1,
    },
    {
      title: "Выезжаем по пермскому краю",
      text: "и за его пределы",
      pict: pictForm2,
    },
    {
      title: "Любые мероприятия",
      text: "от праздника в офисе до барбекю в поле",
      pict: pictForm3,
    },
    {
      title: "Готовим все сами",
      text: "и не используем полуфабрикаты",
      pict: pictForm4,
    },
    {
      title: "Собственная материально-техническая база",
      text: "   ",
      pict: pictForm5,
    },
  ];
  return (
    <div>
      <MyTitle>О нас</MyTitle>
      <div className="flex items-center justify-center">
        <img src={about} alt="" className="hidden md:block" />
        <div className="px-8 md:my-0 md:w-1/2 md:px-20">
          <span className="font-bold">ВЕРСАЛЬ КЕЙТЕРИНГ</span> - это ресторан
          высококачественного выездного обслуживания! Мы работаем на территории
          Перми и Пермского края с 2010 года.
          <div className="my-3"></div> Также в нашей копилке несколько успешно
          реализованных проектов за пределами края, а именно в Екатеринбурге и
          Волгограде.
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-5 my-20">
        {formochki.map((i) => (
          <AboutFormochka pict={i.pict} title={i.title} text={i.text} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
