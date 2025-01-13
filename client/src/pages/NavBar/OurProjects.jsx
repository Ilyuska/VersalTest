import { useEffect, useState } from "react";
import MyTitle from "@/components/UI/MyTitle";
import image from "@/assets/img/banners/Projects.jpg";
import Formochka from "../Home/OurProjects/Formochka";

import { getProjects } from "@/api/MainAPI";

const OurProjects = ({ setHeaderSettings }) => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    setHeaderSettings({
      page: "information",
      pict: image,
      discription: "Наши проекты",
    });
  }, [setHeaderSettings]);

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 px-[7%]">
        {Projects.map((project, index) => (
          <Formochka project={project} key={index} />
        ))}
      </div>
      <MyTitle></MyTitle>
    </>
  );
};

export default OurProjects;
