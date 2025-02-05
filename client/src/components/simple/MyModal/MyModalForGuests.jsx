import { useState } from "react";
import MyModal from "./MyModal";

const MyModalForGuests = ({ status, setStatus, info, changeInfo, add }) => {
  const [addedGuest, setAddedGuest] = useState([info.name, info.quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.name) {
      changeInfo(addedGuest[0], addedGuest[1]); // Редактирование
    } else {
      add(addedGuest[0], addedGuest[1]); // Добавление
    }
    setAddedGuest(["", ""]);
    setStatus(false); // Закрываем модальное окно
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
          disabled={!!info.name}
          className="myInput col-span-2"
          value={addedGuest[0]}
          onChange={(e) => setAddedGuest([e.target.value, addedGuest[1]])}
          required
        />
        <div className="col-span-1 text-xl">Количество:</div>
        <input
          className="myInput col-span-2"
          type="number"
          value={addedGuest[1]}
          onChange={(e) => setAddedGuest([addedGuest[0], e.target.value])}
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
