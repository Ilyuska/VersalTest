import { useState, useContext } from "react";
import { CartContext } from "@/context/index";
import MyModalWindow from "../../components/UI/MyModalWindow";
import MyInput from "../../components/UI/MyInput";
import TrashModal from "./TrashModal";

import trash from "@/assets/img/Admin/Trash.png";

const TypesOfGuests = () => {
  const { guests } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [trashModal, setTrashModal] = useState(false);
  const [addedguest, setAddedGuest] = useState(["", 0]);
  const [errorAddedGuest, setErrorAddedGuest] = useState([false, false]);

  return (
    <div className="border-2 border-mainGray rounded-3xl">
      <div className="flex justify-between text-3xl font-light text-white bg-mainGray  pl-7 pr-2 md:pr-5 py-3 rounded-t-2xl">
        <div>Типы гостей</div>
        <TrashModal
          status={trashModal}
          setStatus={setTrashModal}
          clear={guests.clear}
          title="типы гостей"
          text="типы гостей"
        />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <div className="grid grid-cols-1 gap-y-5 mx-2 sm:mx-4 md:mx-10">
          {Object.keys(guests.value).map((key) => (
            <div className="grid grid-cols-[1fr_0.5fr_1fr_0.5fr] md:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] gap-2 text-base md:text-xl px-[2px] sm:px-2 py-1 text-center items-center border-2 border-mainGray rounded-2xl shadow-lg">
              <div className="hidden md:block">Тип гостя:</div>
              <div className="border-2 border-gray-300 py-1 sm:px-2 rounded-xl shadow-inner truncate ">
                {key}
              </div>
              <div className="md:hidden">x</div>
              <div className="hidden md:block">Количество:</div>
              <div className="border-2 border-gray-300 py-1 sm:px-2 rounded-xl shadow-inner truncate">
                {guests.value[key]}
              </div>
              <img
                src={trash}
                alt="deleteType"
                className="rounded-full w-9 h-9 p-[6px] bg-red-500 border-2 border-gray-300 mx-auto cursor-pointer"
                onClick={() => guests.remove(key)}
              />
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            setModalOpen(true);
          }}
          className="flex justify-center mx-auto w-12 h-12 font-mono text-4xl text-mainGreen  font-thin rounded-full border-2 border-mainGreen hover:scale-95 cursor-pointer"
        >
          +
        </div>
        <MyModalWindow status={isModalOpen} setStatus={setModalOpen}>
          <div className="grid grid-cols-3 items-center gap-y-3 p-2 text-mainGray">
            <div className="col-span-3 text-2xl text-center">
              Добавить гостя
            </div>
            <div className="col-span-1 text-xl">Тип гостя:</div>
            <MyInput
              className={
                !errorAddedGuest[0]
                  ? "border-mainGray col-span-2"
                  : "border-red-400 col-span-2"
              }
              value={addedguest[0]}
              onChange={(e) => setAddedGuest([e.target.value, addedguest[1]])}
            />
            <div className="col-span-1 text-xl">Количество:</div>
            <MyInput
              className={
                !errorAddedGuest[1]
                  ? "border-mainGray col-span-2"
                  : "border-red-400 col-span-2"
              }
              type="number"
              value={addedguest[1]}
              onFocus={() =>
                addedguest[1] == 0
                  ? setAddedGuest([addedguest[0], ""])
                  : addedguest[1]
              }
              onChange={(e) => setAddedGuest([addedguest[0], e.target.value])}
            />
            <button
              className="col-span-3 bg-mainGreen rounded-xl py-2 text-white text-lg hover:scale-95"
              onClick={() => {
                if (addedguest[1] && addedguest[0]) {
                  guests.add(addedguest[0], addedguest[1]);
                  setAddedGuest(["", 0]);
                  setModalOpen(false);
                  setErrorAddedGuest([false, false]);
                } else {
                  setErrorAddedGuest([!addedguest[0], !addedguest[1]]);
                }
              }}
            >
              Добавить
            </button>
          </div>
        </MyModalWindow>
      </div>
    </div>
  );
};

export default TypesOfGuests;
