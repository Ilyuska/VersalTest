import { useState, useEffect } from "react";
import Filters from "@/components/UI/Filters";
import FiltersInput from "@/components/UI/FiltersInput";
import ListItems from "../ListItems";
import Item from "../Item";

import { getMenu } from "@/api/AdminAPI";

const AdminMenu = () => {
  let allMenu = [];
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menu = await getMenu();
        setMenu(menu);
        allMenu = menu;
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);

  const [selectItems, setSelectItems] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    price: ["", ""],
    weight: ["", ""],
  });

  const clearFilters = () => {
    setFilters({
      name: "",
      category: "",
      price: ["", ""],
      weight: ["", ""],
    });
    setMenu(allMenu);
  };

  const applyFilters = () => {
    setMenu(
      allMenu.filter((item) => {
        const nameMatch =
          filters.name != ""
            ? item.name.toLowerCase().includes(filters.name.toLowerCase())
            : true;
        const categoryMatch =
          filters.category != "" ? item.category === filters.category : true;
        const priceMatch =
          filters.price[0] != "" || filters.price[1] != ""
            ? filters.price[0] > filters.price[1]
              ? filters.price[0] == ""
                ? item.price <= filters.price[1]
                : item.price >= filters.price[0]
              : item.price >= filters.price[0] && item.price <= filters.price[1]
            : true;
        const weightMatch =
          filters.weight[0] != "" || filters.weight[1] != ""
            ? filters.weight[0] > filters.weight[1]
              ? filters.weight[0] == ""
                ? item.weight <= filters.weight[1]
                : item.weight >= filters.weight[0]
              : item.weight >= filters.weight[0] &&
                item.weight <= filters.weight[1]
            : true;

        return nameMatch && categoryMatch && priceMatch && weightMatch;
      })
    );
    console.log(filters);
  };

  const deleteItems = () => {};

  return (
    <>
      <Filters applyFilters={applyFilters} clearFilters={clearFilters}>
        <FiltersInput
          title="Наименование:"
          type="text"
          value={filters.name}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <FiltersInput
          title="Категория:"
          type="text"
          value={filters.category}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, category: e.target.value }))
          }
        />
        {/*ПЕРЕДЕЛАТЬ НА ВЫПАДАЮЩИЙ СПИСОК*/}
        <FiltersInput
          title="Цена:"
          type="number"
          minValue={filters.price[0]}
          onChangeMin={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: [Number(e.target.value), prev.price[1]],
            }))
          }
          maxValue={filters.price[1]}
          onChangeMax={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: [prev.price[0], Number(e.target.value)],
            }))
          }
        />
        <FiltersInput
          title="Вес:"
          type="number"
          minValue={filters.weight[0]}
          onChangeMin={(e) =>
            setFilters((prev) => ({
              ...prev,
              weight: [Number(e.target.value), prev.weight[1]],
            }))
          }
          maxValue={filters.weight[1]}
          onChangeMax={(e) =>
            setFilters((prev) => ({
              ...prev,
              weight: [prev.weight[0], Number(e.target.value)],
            }))
          }
        />
      </Filters>

      <ListItems
        titleTable="блюд"
        colsName={[
          "checkbox",
          "Изображение",
          "Наименование",
          "Категория",
          "Вес",
          "Цена",
        ]}
      >
        {menu.map((bludo) => (
          <Item>
            <td className="border border-gray-300 text-center ">
              <input type="checkbox" className="" />
            </td>
            <td className="border border-gray-300 py-2 flex justify-center">
              <img src={bludo.photo} alt="bludo" className="w-16 rounded" />
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
