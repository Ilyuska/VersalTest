import { useContext, useState } from "react";
import { AuthContext } from "../../context/index";
import MyButton from "../../components/UI/MyButton";
import MenuHeader from "./MenuHeader";
import Sort from "./Sort";
import Filter from "./Filter";
import MenuItems from "./MenuItems";
import menuItems from "@/api/TempAPI/Menu/MenuItemsAPI";

const Menu = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const exit = () => {
    console.log("Вы вышли");
    setIsAuth(false);
    localStorage.setItem("auth", "");
  };

  const allMenu = menuItems;
  const [menu, setMenu] = useState(menuItems);
  const [cart, setCart] = useState(menu.filter((i) => i.count > 0));
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Все");

  const addToCart = (item) => {
    const cartIndex = cart.findIndex((i) => item.name === i.name);
    const menuIndex = menu.findIndex((i) => item.name === i.name);
    if (cartIndex !== -1) {
      // Копируем массив для безопасного обновления состояния
      const updatedCart = [...cart];
      updatedCart[cartIndex] = {
        ...updatedCart[cartIndex],
        count: updatedCart[cartIndex].count + 1,
      };
      setCart(updatedCart); // Пихаем его обратно после изменения
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
    //Проделываем все то же самое с menu
    if (menuIndex !== -1) {
      const updatedMenu = [...menu];
      updatedMenu[menuIndex] = {
        ...updatedMenu[menuIndex],
        count: updatedMenu[menuIndex].count + 1,
      };
      setMenu(updatedMenu);
    }
    console.log("Добавил", cart);
  };

  const delFromCart = (item) => {
    const cartIndex = cart.findIndex((i) => item.name === i.name);
    const menuIndex = menu.findIndex((i) => item.name === i.name);
    if (cartIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartIndex] = {
        ...updatedCart[cartIndex],
        count: updatedCart[cartIndex].count - 1,
      };
      if (updatedCart[cartIndex].count === 0) {
        setCart(updatedCart.filter((i) => i.name !== item.name));
      } else {
        setCart(updatedCart);
      }
    }

    if (menuIndex !== -1) {
      const updatedMenu = [...menu]; //Копируем массив для безопасного изменения
      updatedMenu[menuIndex] = {
        //В элемент по индексу перезаписываем новый обьект
        ...updatedMenu[menuIndex], //сохраняя все предыдущие поля
        count: updatedMenu[menuIndex].count - 1, //кроме поля count, которое мы меняем на новое
      };
      setMenu(updatedMenu); //Записываем заново новый массив
    }
    console.log("Удалил", cart);
  };

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
      <MenuHeader cart={cart} />
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
        // inCart={itemsCart}
        addToCart={addToCart}
        delFromCart={delFromCart}
      />
      <MyButton click={exit}>ВЫЙТИ</MyButton>
    </>
  );
};

export default Menu;
