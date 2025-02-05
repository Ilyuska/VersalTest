import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import MySlider from "@/components/smart/MySlider";
import MyTitle from "@/components/UI/MyTitle";

import Formochka from "./Formochka";

import { getProjects } from "@/api/MainAPI";

const OurProjects = () => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

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
