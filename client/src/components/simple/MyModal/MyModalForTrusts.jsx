import { useState } from "react";
import MyModal from "./MyModal";
import MyModalForProjects from "./MyModalForProjects";

const MyModalForTrusts = ({ info, status, setStatus }) => {
  const [gramotaIsOpen, setGramotaIsOpen] = useState(false);
  const [projectIsOpen, setProgectIsOpen] = useState(false);

  return (
    <MyModal status={status} setStatus={setStatus}>
      <div className="md:w-[50vh] lg:w-[40vw] ">
        <div className="text-center text-lg md:text-2xl lg:text-3xl font-thin my-3">
          {info.nameOfCompany}
        </div>
        <div className="flex p-5 items-center gap-5 h-5/6">
          <div className="hidden md:w-3/5 md:flex flex-col gap-2 justify-center px-5 py-5 rounded-xl shadow-2xl border-2 border-gray-200 object-cover mb-8">
            <img
              src={info.evente.pict}
              alt={info.evente.title}
              className="h-1/2 rounded-xl"
            />

            <div className="text-center">{info.evente.title}</div>

            <div
              className="cursor-pointer text-center text-white rounded-2xl bg-mainGreen p-2 "
              onClick={() => setProgectIsOpen(true)}
            >
              Подробнее...
            </div>
          </div>
          <MyModalForProjects
            status={projectIsOpen}
            setStatus={setProgectIsOpen}
            info={info.evente}
          />
          <div className="md:w-2/5 h-5/6">
            <img
              className="w-full h-full rounded-xl shadow-2xl border-2 border-gray-200 object-cover mb-4 md:mb-8 cursor-zoom-in"
              src={info.gramota}
              onClick={() => setGramotaIsOpen(true)}
              alt="gramota"
            />
            <MyModal status={gramotaIsOpen} setStatus={setGramotaIsOpen}>
              <img
                className="w-[50vh] h-auto rounded-2xl "
                src={info.gramota}
                alt="gramota"
              />
            </MyModal>
            <div
              className="md:hidden cursor-pointer text-center text-white rounded-2xl bg-mainGreen p-2 "
              onClick={() => setProgectIsOpen(true)}
            >
              Мероприятие
            </div>
          </div>
        </div>
      </div>
    </MyModal>
  );
};

export default MyModalForTrusts;
