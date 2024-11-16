import { useState } from "react";
import MyButton from "../../components/UI/MyButton";
import pict from "../../pages/Menu/temp.png";

const Item = ({ info, addToCart, delFromCart }, ...props) => {
  const add = () => {
    addToCart(info);
  };

  const del = () => {
    delFromCart(info);
  };

  // const truncateStyle = {
  //   display: "-webkit-box",
  //   WebkitLineClamp: 2,
  //   WebkitBoxOrient: "vertical",
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  // };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="h-3/4 w-full">
        <img
          src={pict}
          alt="bludo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="h-1/4 w-full">
        <div className="h-11 font-semibold line-clamp-2 text-ellipsis text-sm lg:text-base">
          {info.name + " " + String(info.weight)}гр
        </div>
        <div className="flex  gap-1">
          <div className="w-1/3 flex items-center justify-cente font-bold  text-xl md:text-3xl">
            {info.price}₽
          </div>
          {info.count == 0 ? (
            <div
              className="w-2/3 flex items-center justify-center text-base md:text-xl font-semibold  text-white bg-mainGreen rounded-2xl"
              onClick={add}
            >
              В корзину
            </div>
          ) : (
            <div className="w-2/3 flex items-center justify-center text-center border-2 rounded-xl">
              <div className="w-1/4 cursor-pointer" onClick={del}>
                -
              </div>
              <input
                type="text"
                className="w-1/2 text-center  border-x-2"
                value={info.count}
              />
              <div className="w-1/4 cursor-pointer" onClick={add}>
                +
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
