import { useState } from "react";
import usePositiveInput from "../../../hooks/usePositiveIntput";
import MyModal from "./MyModal";

const MyModalForGuests = ({ status, setStatus, info, changeInfo, add }) => {
  const [guestName, setGuestName] = useState(info.name);
  const [guestQuantity, setGuestQuantity] = usePositiveInput(
    info.quantity,
    1,
    5000
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.name) {
      changeInfo(info.name, guestName, guestQuantity); // Редактирование
    } else {
      add(guestName, guestQuantity); // Добавление
    }
    setGuestName("");
    setGuestQuantity("");
    setStatus(false);
  };

  return (
    <MyModal status={status} setStatus={setStatus}>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 items-center gap-y-3 p-2 text-mainGray"
      >
        <label className="col-span-3 text-2xl text-center">
          {info.name ? "Редактор кол-ва гостей" : "Добавить гостя"}
        </label>
        <div className="col-span-1 text-xl">Тип гостя:</div>
        <input
          className="myInput col-span-2"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
        />
        <div className="col-span-1 text-xl">Количество:</div>
        <input
          className="myInput col-span-2"
          type="text"
          value={guestQuantity}
          onChange={(e) => setGuestQuantity(e.target.value)}
          required
        />
        <div className="col-span-3 grid grid-cols-2 gap-2">
          <button className="myButton" type="submit">
            {info.name ? "Сохранить" : "Добавить"}
          </button>
          <button
            className="bg-red-500 rounded-xl text-white text-xl py-2 font-light hover:scale-95 "
            type="button"
            onClick={() => setStatus(false)}
          >
            Отменить
          </button>
        </div>
      </form>
    </MyModal>
  );
};

export default MyModalForGuests;
