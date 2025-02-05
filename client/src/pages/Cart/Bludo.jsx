import { useState, useEffect } from "react";
import trash from "@/assets/img/icons/trash.png";

const Bludo = ({
  info,
  del,
  isDishes,
  dishesValue,
  changeDishesValue,
  changeTemplate,
  toDishes,
  toTemplates,
  nowTemplate,
  allTemplates,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState(nowTemplate);
  const [isCart, setIsCart] = useState(isDishes);
  const [cartValue, setCartValue] = useState(dishesValue);

  useEffect(() => {
    if (selectedTemplate !== nowTemplate) {
      handleTemplateChange();
    }
  }, [selectedTemplate]);

  const handleTemplateChange = () => {
    if (isCart && selectedTemplate !== "cart") {
      toTemplates(info, selectedTemplate);
      setIsCart(false);
    } else if (!isCart && selectedTemplate === "cart") {
      toDishes(info, nowTemplate);
      setIsCart(true);
    } else if (!isCart && selectedTemplate !== nowTemplate) {
      changeTemplate(info, nowTemplate, selectedTemplate);
    }
  };

  const InputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCartValue(value);
    changeDishesValue(info.name, value);
  };

  return (
    <div className="h-28 grid grid-cols-[1fr_3fr] sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr_0.3fr] gap-x-2  my-4 font-semibold">
      {/*img*/}
      <div className="w-28 h-28 flex mx-auto">
        <img
          src={info.image}
          alt={info.name}
          className="rounded-3xl h-full w-full object-cover"
        />
      </div>
      {/*main*/}
      <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="grid grid-cols-[9fr_1fr] sm:grid-cols-[9fr_0.8fr] md:grid-cols-1">
          <div className="text-xs sm:text-sm md:text-lg overflow-hidden overflow-ellipsis line-clamp-2">
            {info.name} ({info.weight}
            {info.weight_type}.)
          </div>
          <img
            src={trash}
            alt="Удалить"
            className="md:hidden rounded-lg w-5 h-5 p-[3px] bg-red-500 ml-auto  cursor-pointer"
            onClick={() => (isCart ? del(info) : del(nowTemplate, info))}
          />
        </div>

        <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
          <div className="md:text-center md:text-lg">{info.price}₽/шт.</div>
          <div className="grid grid-cols-3 gap-x-2">
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className={`rounded-md bg-white border-mainGray border text-mainGray text-lg cursor-pointer h-full w-full sm:h-1/2 md:h-2/6 md:w-full truncate px-2 ${
                selectedTemplate == "cart" ? "col-span-2" : "col-span-3"
              }`}
            >
              <option value="cart">Свое:</option>
              {allTemplates.map((template) => (
                <option key={template} value={template}>
                  {template}
                </option>
              ))}
            </select>

            <input
              type="text"
              className={`${
                selectedTemplate == "cart" ? "block" : "hidden"
              }  h-full w-full sm:h-1/2 md:h-2/6 md:w-full border border-mainGray rounded-md text-center bg-transparent`}
              onChange={InputChange}
              value={cartValue}
              maxLength={4}
            />
          </div>
        </div>
      </div>
      {/*remove*/}

      <img
        src={trash}
        alt="Удалить"
        className="hidden md:block rounded-xl w-8 h-8 p-[6px] bg-red-500 mx-auto cursor-pointer"
        onClick={() => (isCart ? del(info) : del(nowTemplate, info))}
      />
    </div>
  );
};

export default Bludo;
