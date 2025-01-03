import { useState } from "react";
import trash from "@/assets/img/Admin/Trash.png";
import plus from "@/assets/img/Admin/Plus.png";
import ModalForDish from "./Modals/ModalForDish";

const ListItems = ({ children, titleTable, colsName }) => {
  const colsToRender = colsName[0] == "checkbox" ? colsName.slice(1) : colsName;
  const [isModalItem, setModalItem] = useState(false);

  return (
    <div className="border-2 border-mainGray rounded-3xl my-12   ">
      <div className="text-3xl font-light text-white bg-mainGray px-7 py-3 rounded-t-2xl flex justify-between">
        <div>Список {titleTable}</div>
        <div className="flex h-10 gap-5">
          <img
            src={plus}
            alt="added"
            onClick={() => setModalItem(true)}
            className="bg-mainGreen rounded-lg p-1"
          />
          {titleTable == "блюд" ? (
            <ModalForDish
              status={isModalItem}
              setStatus={setModalItem}
              title="Добавить блюдо"
            />
          ) : titleTable == "заказов" ? (
            <></>
          ) : (
            <></>
          )}
          <img
            src={trash}
            alt="deleted"
            className="bg-red-500 rounded-lg p-1"
          />
        </div>
      </div>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr className="border border-black">
            {colsName[0] == "checkbox" && (
              <th className="text-center">
                <input type="checkbox" />
              </th>
            )}
            {colsToRender.map((col, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {col}
              </th>
            ))}
            <th className="border border-gray-300 ">Действия</th>
          </tr>
        </thead>
        <tbody className="[&:last-child]:rounded-b-3xl">{children}</tbody>
      </table>
    </div>
  );
};

export default ListItems;
