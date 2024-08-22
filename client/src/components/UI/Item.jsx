import { useState } from "react";
import MyButton from "./MyButton";
import pict from "../../pages/Menu/temp.png";

const Item = ({ info, addToCart, delFromCart }, ...props) => {
  const add = () => {
    addToCart(info);
  };

  const del = () => {
    delFromCart(info);
  };

  const truncateStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div className="flex flex-col items-center justify-between gap-[1px] p-2 border-2 rounded-lg md:gap-1 lg:gap-2 lg:h-72 m-1 h-64">
      <img src={pict} alt="bludo" className="h-1/2 rounded-lg" />
      <div className="font-bold text-center" style={truncateStyle}>
        {info.name}
      </div>
      <div className="">{info.price} руб.</div>
      {info.count == 0 ? (
        <MyButton click={add}>Добавить</MyButton>
      ) : (
        <div className="flex items-center justify-center text-center border-2 rounded-xl">
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
  );
};

export default Item;
