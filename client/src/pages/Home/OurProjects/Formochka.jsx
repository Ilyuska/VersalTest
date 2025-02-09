import { useState } from "react";
import MyModalForProjects from "@/components/simple/MyModal/MyModalForProjects";

const Formochka = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-4/5 h-32 lg:h-52 text-white rounded-2xl mb-8 mx-auto text-sm md:text-base lg:text-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={project.pict}
          alt={project.title}
        />
        <div className="flex flex-col justify-end absolute inset-0 bg-black bg-opacity-30 rounded-2xl hover:bg-opacity-0">
          <div className="mx-3 text-xs md:text-sm text-yellow-400 font-semibold">
            {project.discription.type}
          </div>
          <div className="truncate mx-3 text-sm md:text-base lg:text-lg font-semibold mb-5">
            {project.title}
          </div>
        </div>
      </div>
      <MyModalForProjects
        info={project}
        status={isOpen}
        setStatus={setIsOpen}
      />
    </>
  );
};

export default Formochka;
