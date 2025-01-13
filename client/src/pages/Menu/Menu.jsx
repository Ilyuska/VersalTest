import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/context/index";
import Sort from "./Sort";
import Filter from "./Filter";
import Item from "./Item";

import { getMenu } from "@/api/MainAPI";

const Menu = ({ setHeaderSettings }) => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  const [Menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menu = await getMenu();
        setMenu(menu);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);
  const [selectedSort, setSelectedSort] = useState("");
  // const [selectedFilter, setSelectedFilter] = useState("Все");

  // useEffect(() => {
  //   const updatedMenu = menu.map((menuItem) => {
  //     const cartItem = cart.value.find(
  //       (cartItem) => cartItem.id == menuItem.id
  //     );
  //     return {
  //       ...menuItem,
  //       count: cartItem ? cartItem.count : 0,
  //     };
  //   });
  //   setMenu(updatedMenu);
  // }, [cart.value]);

  // const sortMenu = (sort) => {
  //   setSelectedSort(sort);
  //   const tempSortedMenu = [...menu]; //Копируем состояни для безопасного изменения
  //   if (sort == "price-desc") {
  //     tempSortedMenu.sort((a, b) => b.price - a.price);
  //   } else if (sort == "price-asc") {
  //     tempSortedMenu.sort((a, b) => a.price - b.price);
  //   } else if (sort == "name-desc") {
  //     tempSortedMenu.sort((a, b) => b.name.localeCompare(a.name));
  //   } else if (sort == "name-asc") {
  //     tempSortedMenu.sort((a, b) => a.name.localeCompare(b.name));
  //   }
  //   setMenu(tempSortedMenu);
  // };

  // const filterMenu = (filterBy) => {
  //   setSelectedFilter(filterBy);

  //   if (filterBy === "Все") {
  //     setMenu(allMenu);
  //   } else {
  //     const filteredMenu = allMenu.filter((item) => item.category === filterBy);
  //     setMenu(filteredMenu);
  //   }
  // };
  const tempSort = () => {
    console.log("Sorting");
  };

  return (
    <>
      <div className="my-8 mx-[10%] flex flex-wrap justify-between gap-y-3">
        <Filter
          //onClick={filterMenu}
          onClick={tempSort}
          options={["Все", ...[...new Set(Menu.map((item) => item.category))]]}
        />
        <Sort
          value={selectedSort}
          // onChange={(sort) => sortMenu(sort)}
          onChange={tempSort}
          defaultValue="Сортировать по..."
          options={[
            { name: "По цене (убыванию)", value: "price-desc" },
            { name: "По цене (возрастанию)", value: "price-asc" },
            { name: "По названию (А-Я)", value: "name-asc" },
            { name: "По названию (Я-А)", value: "name-desc" },
          ]}
        />
      </div>
      <div className="mx-[10%] mb-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
        {Menu.map((i, index) => (
          <Item
            info={i}
            key={index}
            addToCart={cart.add}
            delFromCart={cart.remove}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
