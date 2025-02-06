import { useContext } from "react";
import { OrderContext } from "@/context/index";
import DropMenu from "@/components/UI/DropMenu";
import DropInfo from "@/components/UI/DropInfo";

const MakingOrder = ({ isModal }) => {
  const {
    value,
    changeOrderType,
    changeDate,
    changeAddress,
    changeComment,
    totalCost,
  } = useContext(OrderContext);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <form
      className={`grid  ${
        isModal ? "" : "border-2 border-mainGray rounded-3xl"
      }`}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(
          `Ваш заказ \n Тип мероприятия: ${value.order_type} \n Дата проведения: ${value.date} \n Адрес проведения: ${value.address} \n Комментарий: ${value.comment}`
        );
      }}
    >
      <label className="flex justify-between text-3xl font-light text-white bg-mainGray pl-7 pr-2 md:pr-5 py-3 rounded-t-2xl">
        Оформление заказа
      </label>
      <DropMenu
        value={value.order_type}
        onChange={changeOrderType}
        defaultValue="Тип мероприятия"
        options={[
          { name: "Банкет", value: "banquet" },
          { name: "Фуршет", value: "furshet" },
          { name: "Кофе-брейк", value: "coffe breake" },
          { name: "Барбекю", value: "barbecue" },
          { name: "Доставка еды", value: "delivery" },
          { name: "Корпоративное питание", value: "meeting" },
          { name: "Обучающее мероприятие", value: "training event" },
        ]}
        className="myInput border-mainGray m-3"
        required
      />

      <input
        type="date"
        value={value.date}
        min={getCurrentDate()}
        className="myInput border-mainGray m-3"
        onChange={(e) => changeDate(e.target.value)}
        required
      />

      <input
        type="text"
        value={value.address}
        className="myInput border-mainGray m-3"
        placeholder="Место проведения"
        onChange={(e) => changeAddress(e.target.value)}
        required
      />
      <div className="m-3">
        <div className="text-center py-2 text-xl font-semibold text-white bg-mainGray rounded-t-xl ">
          Меню
        </div>
        {value.templates.map((template) => (
          <DropInfo title={template.name + " (" + template.quantity + " чел.)"}>
            {template.menu.map((dish) => (
              <div className="flex items-end w-full h-4 my-1">
                <span className="truncate text-base/5 ">{dish.name}</span>
                <span className="flex-grow border-b-2 border-dotted border-black mx-1"></span>
                <span className="truncate text-base/4">
                  {Number(template.quantity) * Number(dish.price)}₽
                </span>
              </div>
            ))}
          </DropInfo>
        ))}
        <DropInfo title="Прочее" last={true}>
          {value.dishes.map((dish) => (
            <div className="flex items-end w-full h-4 my-1">
              <span className="truncate text-base/5 ">{dish.dish.name}</span>
              <span className="flex-grow border-b-2 border-dotted border-black mx-1"></span>
              <span className="truncate text-base/4">
                {Number(dish.quantity) * Number(dish.dish.price)}₽
              </span>
            </div>
          ))}
        </DropInfo>
      </div>
      {/* <div className="text-xl text-mainGray m-3">
        Официанты (1 на 10 гостей): <span>20чел. - 10000₽</span>
      </div> */}
      <textarea
        value={value.comment}
        onChange={(e) => changeComment(e.target.value)}
        placeholder="Комментарий..."
        className="myInput h-48 border-mainGray m-3"
      ></textarea>
      <div className="text-xl text-mainGray m-3 flex justify-between ">
        <span>ИТОГО:</span> <span>{totalCost}₽</span>
      </div>
      <button type="submit" className="myButton m-3">
        Оформить заказ
      </button>
    </form>
  );
};

export default MakingOrder;
