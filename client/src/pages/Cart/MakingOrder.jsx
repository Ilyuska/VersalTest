import React from "react";

const MakingOrder = () => {
  return (
    <div className="border-2 border-mainGray rounded-3xl">
      <div className="flex justify-between text-3xl font-light text-white bg-mainGray pl-7 pr-2 md:pr-5 py-3 rounded-t-2xl">
        Оформление заказа
      </div>
      <div className="grid m-3 gap-2">
        <div>Тип мероприятия</div>
        <div>Дата и время (От и до)</div>
        <div>Место</div>
        <div>
          Количество гостей и общее число (по клику показывать все
          классификации)
        </div>
        <div>
          Меню (по клику показывать все тип гостя (его количество) и меню на
          одного)
        </div>
        <div>Офики</div>
        <div>Прочее</div>
        <div>ИТОГО</div>
        <div
          onClick={() => console.log("Заказ оформлен")}
          className=" bg-mainGreen py-1 rounded-2xl text-2xl font-light text-white text-center cursor-pointer hover:scale-95"
        >
          Оформить заказ
        </div>
      </div>
    </div>
  );
};

export default MakingOrder;
