import { useState, useEffect, useMemo } from "react";
import DropMenu from "@/components/UI/DropMenu";
import Filter from "./Filter";
import Item from "./Item";

import { getMenu } from "@/api/MainAPI";

const Menu = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  const [menu, setMenu] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const tempMenu = await getMenu();
        setMenu(tempMenu);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);

  const Dishes = useMemo(() => {
    const category =
      selectedCategory === "Все"
        ? menu
        : menu.filter((item) => item.category === selectedCategory);

    const sorted = [...category].sort((a, b) => {
      if (selectedSort == "price-desc") {
        return b.price - a.price;
      } else if (selectedSort == "price-asc") {
        return a.price - b.price;
      } else if (selectedSort == "name-desc") {
        return b.name.localeCompare(a.name);
      } else if (selectedSort == "name-asc") {
        return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [menu, selectedCategory, selectedSort]);

  const allCategory = useMemo(() => {
    return [...new Set(menu.map((item) => item.category))].map((category) => ({
      name: category,
      value: category,
    }));
  }, [menu]);

  return (
    <>
      <div className="my-8 mx-[10%] flex justify-end gap-x-3  ">
        <DropMenu
          value={selectedCategory}
          onChange={setSelectedCategory}
          defaultValue="Категория"
          options={[{ name: "Все", value: "Все" }, ...allCategory]}
          className="w-2/5 sm:w-28 rounded-lg p-2 bg-white border-mainGray border-2 text-mainGray text-lg cursor-pointer"
        />
        <DropMenu
          value={selectedSort}
          onChange={setSelectedSort}
          defaultValue="Сортировать..."
          options={[
            { name: "По цене (убыванию)", value: "price-desc" },
            { name: "По цене (возрастанию)", value: "price-asc" },
            { name: "По названию (А-Я)", value: "name-asc" },
            { name: "По названию (Я-А)", value: "name-desc" },
          ]}
          className="w-3/5 sm:w-48 rounded-lg p-2 bg-white border-mainGray border-2 text-mainGray text-lg cursor-pointer"
        />
      </div>
      <div className="mx-[10%] mb-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 md:gap-y-10">
        {Dishes.map((i, index) => (
          <Item info={i} key={index} />
        ))}
      </div>
    </>
  );
};

export default Menu;
