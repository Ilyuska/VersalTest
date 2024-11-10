import { useEffect } from "react";
import MyTitle from "@/components/UI/MyTitle";
import image from "@/assets/img/Header/Projects.jpg";
import Formochka from "../Home/OurProjects/Formochka";

//tempApi
import Projects from "@/api/TempAPI/OurProjects/OurProjects";

const OurProjects = ({ setIsMainPage, setHeaderPict }) => {
  useEffect(() => {
    setIsMainPage(false);
    setHeaderPict({ pict: image, discription: "Наши проекты" });
  }, [setIsMainPage, setHeaderPict]);

  return (
    <>
      <MyTitle>Наши проекты</MyTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 px-[7%]">
        {Projects.map((project) => (
          <Formochka project={project} />
        ))}
      </div>
      <MyTitle></MyTitle>
    </>
  );
};

export default OurProjects;
