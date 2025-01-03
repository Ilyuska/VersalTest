import { SwiperSlide } from "swiper/react";
import MySlider from "@/components/smart/MySlider";
import MyTitle from "@/components/UI/MyTitle";

import Formochka from "./Formochka";

//tempAPI
import Projects from "@/api/TempAPI/OurProjects/OurProjects";

const OurProjects = () => {
  return (
    <>
      <MyTitle>Наши проекты</MyTitle>
      <MySlider slides={{ sm: 2, md: 3, lg: 4 }}>
        {Projects.map((project) => (
          <SwiperSlide>
            <Formochka project={project} />
          </SwiperSlide>
        ))}
      </MySlider>
    </>
  );
};

export default OurProjects;
