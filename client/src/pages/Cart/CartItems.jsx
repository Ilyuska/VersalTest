import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import TrashModal from "./TrashModal";

import { CartContext } from "@/context/index";

import emptyCart from "@/assets/img/banners/EmptyCart.png";
import trash from "@/assets/img/icons/trash.png";

const CartItems = () => {
  const { cart, guests } = useContext(CartContext);
  const [trashModal, setTrashModal] = useState(false);
  const [countItem, setCountItem] = useState("");

  return (
    <div className="border-2 border-mainGray rounded-3xl">
      <div className="flex justify-between text-3xl font-light text-white bg-mainGray pl-7 pr-2 md:pr-5 py-3 rounded-t-2xl">
        <div>Корзина</div>
        <TrashModal
          status={trashModal}
          setStatus={setTrashModal}
          clear={cart.clear}
          title="корзину"
          text="блюда"
        />
      </div>
      <div className="grid mx-5 py-1">
        {cart.value.length == 0 ? (
          <div className="grid justify-center text-center gap-4 my-5">
            <img src={emptyCart} alt="empty cart" className="" />
            <div className="text-mainGray text-2xl ">Ваша корзина пуста</div>
            <Link
              to="/menu"
              className=" bg-mainGreen text-white text-2xl font-light rounded-xl hover:scale-95"
            >
              МЕНЮ
            </Link>
          </div>
        ) : (
          cart.value.map((item) => {
            return (
              <div className="h-28 grid grid-cols-[1fr_2fr_1fr_1.5fr_0.5fr] gap-x-4 my-4 text-lg font-semibold">
                <div className="w-28 h-28 flex mx-auto">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="rounded-3xl h-full w-full object-cover"
                  />
                </div>

                <div className=" ">
                  {item.name} {item.weight}гр.
                </div>
                {/* 
                
                
                
                */}

                <select
                  value={item.count}
                  onChange={(e) => {
                    cart.changeCount(item.id, e.target.value);
                  }}
                  className="rounded-md bg-white border-mainGray border mx-1 text-mainGray text-lg cursor-pointer h-2/6 w-full truncate"
                >
                  <option value={Number.isFinite(item.count) ? item.count : 1}>
                    Свое:
                  </option>
                  {Object.keys(guests.value).map((key) => (
                    <option value={key}>
                      {key} ({guests.value[key]}шт.)
                    </option>
                  ))}
                </select>

                <div className="text-center">
                  {Number.isFinite(item.count)
                    ? Number(item.count) * Number(item.price)
                    : Number(guests.value[item.count]) * Number(item.price)}
                  ₽
                </div>

                {/* 
                
                
                
                */}
                <img
                  src={trash}
                  alt="Удалить"
                  className="rounded-full w-11 h-11 p-[6px] bg-red-500 border-2 border-gray-300 mx-auto cursor-pointer"
                  onClick={() => cart.remove(item.id)}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartItems;
// grid-cols-[1fr_2fr_1fr_0.25fr_2fr_0.25fr_1fr_0.5fr]
