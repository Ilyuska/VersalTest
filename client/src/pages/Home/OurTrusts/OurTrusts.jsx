import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import MySlider from "@/components/smart/MySlider";
import MyTitle from "@/components/UI/MyTitle";

import Formochka from "./Formochka";

import { getTrusts } from "@/api/MainAPI";

const OurTrusts = () => {
  const [Trusts, setTrusts] = useState([]);

  useEffect(() => {
    const fetchTrusts = async () => {
      try {
        const trusts = await getTrusts();
        setTrusts(trusts);
      } catch (error) {
        console.log("ОШИБКА" + error);
      }
    };
    fetchTrusts();
  }, []);

  return (
    <>
      <MyTitle>Нам доверяют</MyTitle>
      <MySlider slides={{ sm: 2, md: 3, lg: 5 }}>
        {Trusts.map((item, index) => (
          <SwiperSlide>
            <Formochka
              image={item.logo}
              information={item.information}
              key={index}
            />
          </SwiperSlide>
        ))}
      </MySlider>
    </>
  );
};

export default OurTrusts;
