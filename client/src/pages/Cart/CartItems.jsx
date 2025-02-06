import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "@/context/index";
import TrashModal from "./TrashModal";
import MyModal from "@/components/simple/MyModal/MyModal";
import MakingOrder from "./MakingOrder";
import Bludo from "./Bludo";

import emptyCart from "@/assets/img/banners/EmptyCart.png";

const CartItems = () => {
  const { dishes, templates, clear, length } = useContext(OrderContext);
  const [trashModal, setTrashModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const FromDishesToTemplates = (item, template) => {
    dishes.remove(item);
    templates.addDish(template, item);
  };

  const FromTemplatesToDishes = (item, template) => {
    templates.removeDish(template, item);
    dishes.add(item);
  };

  const changeTemplate = (item, template, newTemplate) => {
    templates.removeDish(template, item);
    templates.addDish(newTemplate, item);
  };

  return (
    <div className="border-2 border-mainGray rounded-3xl">
      <div className="flex justify-between text-3xl font-light text-white bg-mainGray pl-7 pr-2 md:pr-5 py-3 rounded-t-2xl">
        <div>Корзина</div>
        <TrashModal
          status={trashModal}
          setStatus={setTrashModal}
          clear={clear}
          title="корзину "
          text="блюда"
        />
      </div>
      <div className="grid mx-2 py-1">
        {length === 0 ? (
          <div className="grid justify-center text-center gap-4 my-5">
            <img src={emptyCart} alt="empty cart" />
            <div className="text-mainGray text-2xl">Ваша корзина пуста</div>
            <Link
              to="/menu"
              className=" bg-mainGreen text-white text-2xl font-light rounded-xl hover:scale-95"
            >
              МЕНЮ
            </Link>
          </div>
        ) : (
          <>
            {dishes.value.map((item) => (
              <Bludo
                key={item.dish.id} // Добавить уникальный ключ
                info={item.dish}
                del={dishes.remove}
                isDishes={true}
                dishesValue={item.quantity}
                changeDishesValue={dishes.count}
                toTemplates={FromDishesToTemplates}
                toDishes={FromTemplatesToDishes}
                changeTemplate={changeTemplate}
                nowTemplate="cart" // Для блюд из корзины всегда "cart"
                allTemplates={templates.titles}
              />
            ))}
            {templates.value.map((item) =>
              item.menu.map((bludo) => (
                <Bludo
                  key={bludo.id} // Уникальный ключ для каждого блюда
                  info={bludo}
                  del={templates.removeDish}
                  isDishes={false}
                  toTemplates={FromDishesToTemplates}
                  toDishes={FromTemplatesToDishes}
                  changeTemplate={changeTemplate}
                  nowTemplate={item.name} // Для блюд из шаблона используем название шаблона
                  allTemplates={templates.titles}
                />
              ))
            )}
            <button
              onClick={() => setOrderModal(true)}
              className="block  min-[1360px]:hidden myButton my-2 lg:ml-5"
            >
              Оформить заказ
            </button>
          </>
        )}
      </div>
      <MyModal status={orderModal} setStatus={setOrderModal}>
        <MakingOrder isModal={orderModal} />
      </MyModal>
    </div>
  );
};

export default CartItems;
