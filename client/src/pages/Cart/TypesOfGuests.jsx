import { useState, useContext } from "react";
import { OrderContext } from "@/context/index";
import MyModalForGuests from "@/components/simple/MyModal/MyModalForGuests";
import TrashModal from "./TrashModal";

import trash from "@/assets/img/icons/trash.png";
import redactor from "@/assets/img/icons/redactor.png";

const TypesOfGuests = () => {
  const { templates } = useContext(OrderContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [trashModal, setTrashModal] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null); // Состояние для редактируемого гостя

  return (
    <div className="border-2 border-mainGray rounded-3xl">
      <div className="flex justify-between text-3xl font-light text-white bg-mainGray pl-7 pr-2 md:pr-5 py-3 rounded-t-2xl">
        <div>Типы гостей</div>
        <TrashModal
          status={trashModal}
          setStatus={setTrashModal}
          clear={templates.clear}
          title="типы гостей"
          text="типы гостей"
        />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <div className="grid grid-cols-1 gap-y-5 mx-2 sm:mx-4 md:mx-10">
          {templates.value.map((item) => (
            <div
              key={item.name} // Уникальный ключ для каждого элемента
              className="grid grid-cols-[1fr_0.1fr_1fr_0.5fr] md:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] gap-2 text-base md:text-xl px-[2px] sm:px-2 py-1 text-center items-center border-2 border-mainGray rounded-2xl shadow-lg"
            >
              <div className="hidden md:block">Тип гостя:</div>
              <div className="border-2 border-gray-300 py-1 sm:px-2 rounded-xl shadow-inner truncate">
                {item.name}
              </div>
              <div className="md:hidden">x</div>
              <div className="hidden md:block">Количество:</div>
              <div className="border-2 border-gray-300 py-1 sm:px-2 rounded-xl shadow-inner truncate">
                {item.quantity}
              </div>
              <div className="flex justify-around">
                <img
                  src={redactor}
                  alt="editType"
                  className="rounded-lg md:rounded-xl w-6 h-6 md:w-8 md:h-8 md:mx-auto cursor-pointer"
                  onClick={() => setEditingGuest(item)} // Открываем модальное окно для редактирования текущего гостя
                />
                <img
                  src={trash}
                  alt="deleteType"
                  className="rounded-lg md:rounded-xl w-6 h-6 md:w-8 md:h-8 p-[3px] md:p-[6px] bg-red-500 md:mx-auto cursor-pointer"
                  onClick={() => templates.del(item.name)}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => setModalOpen(true)}
          className="flex justify-center mx-auto w-12 h-12 font-mono text-4xl text-mainGreen font-thin rounded-full border-2 border-mainGreen hover:scale-95 cursor-pointer"
        >
          +
        </div>
        <MyModalForGuests
          status={isModalOpen}
          setStatus={setModalOpen}
          info={{ name: "", quantity: "" }}
          add={templates.add}
        />
        {editingGuest && (
          <MyModalForGuests
            status={!!editingGuest}
            setStatus={() => setEditingGuest(null)} // Закрываем модальное окно
            info={editingGuest}
            changeInfo={templates.change}
          />
        )}
      </div>
    </div>
  );
};

export default TypesOfGuests;
