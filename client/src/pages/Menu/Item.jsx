import { useState, useEffect, useContext } from "react";
import { OrderContext } from "@/context/index";

const Item = ({ info }) => {
  const { dishes, templates } = useContext(OrderContext);
  const [addedOption, setAddedOption] = useState("");

  const addToCart = () => dishes.add(info);
  const addToTemplates = () => templates.addDish(addedOption, info);

  useEffect(() => {
    if (addedOption == "cart") {
      addToCart();
    } else if (addedOption.length > 0) {
      addToTemplates();
    }
    setAddedOption("");
  }, [addedOption]);

  return (
    <div className="flex flex-col items-center justify-between h-72 lg:h-[40vh]">
      <div className="h-3/4 w-full">
        <img
          src={info.image}
          alt="bludo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="h-1/4 w-full">
        <div className="h-11 font-semibold line-clamp-2 text-ellipsis text-sm lg:text-base">
          {info.name + " " + String(info.weight) + info.weight_type}
        </div>
        <div className="flex  gap-1">
          <div className="w-1/3 flex items-center justify-cente font-bold  text-xl md:text-3xl lg:text-3xl">
            {info.price}₽
          </div>
          {templates.value.length == 0 ? (
            <button
              onClick={() => addToCart()}
              className="w-2/3 ml-2 bg-mainGreen rounded-xl text-white py-1 font-light text-sm md:text-lg hover:scale-95"
            >
              Добавить
            </button>
          ) : (
            <select
              className="bg-mainGreen text-white rounded-xl w-2/3 text-center text-sm md:text-base"
              value={addedOption}
              onChange={(e) => setAddedOption(e.target.value)}
            >
              <option disabled value="" className="bg-white w-auto">
                Добавить...
              </option>
              <option value="cart" className="bg-white text-black w-auto">
                Корзина
              </option>
              {templates.titles.map((i) => (
                <option value={i} className="bg-white text-black w-auto">
                  {i}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
