import { SwiperSlide } from "swiper/react";
import MySlider from "@/components/UI/MySlider/MySlider";
import MyTitle from "@/components/UI/MyTitle";

import Formochka from "./Formochka";

//Здесь будет API
import information from "@/api/TempAPI/OurTrusts/information";

const OurTrusts = () => {
  return (
    <>
      <MyTitle>Нам доверяют</MyTitle>
      <MySlider slides={{ sm: 2, md: 3, lg: 5 }}>
        {information.map((item) => (
          <SwiperSlide>
            <Formochka image={item.logo} information={item.information} />
          </SwiperSlide>
        ))}
      </MySlider>
    </>
  );
};

export default OurTrusts;
