import { useState } from "react";
import Filters from "@/components/UI/AdminUI/Filters";
import FiltersInput from "@/components/UI/AdminUI/FiltersInput";
import ListItems from "@/components/UI/AdminUI/ListItems";
import Item from "@/components/UI/AdminUI/Item";

import menuItems from "@/api/TempAPI/Menu/MenuItemsAPI";
import pict from "@/api/TempAPI/Menu/temp.png";

const AdminMenu = () => {
  return (
    <>
      <Filters>
        <FiltersInput title="Наименование:" type="text" />
        <FiltersInput title="Категория:" type="text" />{" "}
        {/*ПЕРЕДЕЛАТЬ НА ВЫПАДАЮЩИЙ СПИСОК*/}
        <FiltersInput title="Цена:" type="number" />
        <FiltersInput title="Вес:" type="number" />
      </Filters>
      <ListItems
        titleTable="блюд"
        colsName={["Изображение", "Наименование", "Категория", "Вес", "Цена"]}
      >
        {menuItems.map((bludo) => (
          <Item>
            <td className="border border-gray-300 py-2 flex justify-center">
              <img src={pict} alt="bludo" className="w-16 rounded" />
            </td>
            <td className="border border-gray-300 px-4 py-2">{bludo.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {bludo.category}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {bludo.weight}гр
            </td>
            <td className="border border-gray-300 px-4 py-2">{bludo.price}₽</td>
          </Item>
        ))}
      </ListItems>
    </>
  );
};

export default AdminMenu;
