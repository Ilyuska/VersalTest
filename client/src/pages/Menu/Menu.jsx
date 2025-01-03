import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/context/index";
import Sort from "./Sort";
import Filter from "./Filter";
import MenuItems from "./MenuItems";
import menuItems from "@/api/TempAPI/Menu/MenuItemsAPI";

const Menu = ({ setHeaderSettings }) => {
  const { cart } = useContext(CartContext);

  const allMenu = menuItems;
  const [menu, setMenu] = useState(menuItems);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Все");

  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  useEffect(() => {
    const updatedMenu = menu.map((menuItem) => {
      const cartItem = cart.value.find(
        (cartItem) => cartItem.id == menuItem.id
      );
      return {
        ...menuItem,
        count: cartItem ? cartItem.count : 0,
      };
    });
    setMenu(updatedMenu);
  }, [cart.value]);

  const sortMenu = (sort) => {
    setSelectedSort(sort);
    const tempSortedMenu = [...menu]; //Копируем состояни для безопасного изменения
    if (sort == "price-desc") {
      tempSortedMenu.sort((a, b) => b.price - a.price);
    } else if (sort == "price-asc") {
      tempSortedMenu.sort((a, b) => a.price - b.price);
    } else if (sort == "name-desc") {
      tempSortedMenu.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort == "name-asc") {
      tempSortedMenu.sort((a, b) => a.name.localeCompare(b.name));
    }
    setMenu(tempSortedMenu);
  };

  const filterMenu = (filterBy) => {
    setSelectedFilter(filterBy);

    if (filterBy === "Все") {
      setMenu(allMenu);
    } else {
      const filteredMenu = allMenu.filter((item) => item.category === filterBy);
      setMenu(filteredMenu);
    }
  };

  return (
    <>
      <div className="my-8 mx-[10%] flex flex-wrap justify-between gap-y-3">
        <Filter
          onClick={filterMenu}
          options={[
            "Все",
            ...[...new Set(menuItems.map((item) => item.category))],
          ]}
        />
        <Sort
          value={selectedSort}
          onChange={(sort) => sortMenu(sort)}
          defaultValue="Сортировать по..."
          options={[
            { name: "По цене (убыванию)", value: "price-desc" },
            { name: "По цене (возрастанию)", value: "price-asc" },
            { name: "По названию (А-Я)", value: "name-asc" },
            { name: "По названию (Я-А)", value: "name-desc" },
          ]}
        />
      </div>
      <MenuItems
        menuItems={menu}
        addToCart={cart.add}
        delFromCart={cart.remove}
      />
    </>
  );
};

export default Menu;
