import { useState, useMemo, useEffect } from "react";
import { OrderContext } from "./index";
import { getOrder } from "../api/MainAPI";

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    order_type: "",
    date: "",
    address: "",
    comment: "",
    templates: [],
    dishes: [],
  });

  useEffect(() => {
    const setNewOrder = async () => {
      try {
        const res = await getOrder();
        setOrder(res);
      } catch (err) {
        console.log("Ошибка Order");
      }
    };
    setNewOrder();
  }, []);

  const length = useMemo(() => {
    const templates = order.templates.reduce(
      (sum, item) => sum + item.menu.length,
      0
    );
    const dishes = order.dishes.length;
    return templates + dishes;
  }, [order.templates, order.dishes]);

  const templateTitles = useMemo(
    () => order.templates.map((item) => item.name),
    [order.templates]
  );

  const totalCost = useMemo(() => {
    const templates = order.templates.reduce(
      (sum, template) =>
        sum +
        template.quantity *
          template.menu.reduce((res, item) => res + item.price, 0),
      0
    );
    const dishes = order.dishes.reduce(
      (sum, item) => sum + item.dish.price * item.quantity,
      0
    );
    return templates + dishes;
  }, [order.templates, order.dishes]);

  const changeOrderType = (newOrderType) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      order_type: newOrderType,
    }));
  };

  const changeDate = (newDate) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      date: newDate,
    }));
  };

  const changeAddress = (newAddress) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      address: newAddress,
    }));
  };

  const changeComment = (newComment) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      comment: newComment,
    }));
  };

  const cartContainsDish = (item) => {
    return order.dishes.some(
      (existingDish) => existingDish.dish.name === item.name
    );
  };

  const addToMenu = (item) => {
    if (cartContainsDish(item)) {
      return;
    }
    setOrder((prevOrder) => ({
      ...prevOrder,
      dishes: [...prevOrder.dishes, { dish: item, quantity: 1 }],
    }));
  };

  const changeCountMenu = (item, count) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      dishes: prevOrder.dishes.map((i) =>
        i.dish.name === item ? { ...i, quantity: count } : i
      ),
    }));
  };

  const removeFromMenu = (item) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      dishes: prevOrder.dishes.filter((dish) => dish.dish !== item),
    }));
  };

  const addTemplate = (name, quantity) => {
    const templateExists = order.templates.some(
      (existingTemplates) => existingTemplates.name === name
    );
    if (templateExists) {
      return;
    }

    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: [
        ...prevOrder.templates,
        { name: name, quantity: quantity, menu: [] },
      ],
    }));
  };

  const changeTemplate = (name, newName, quantity) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: prevOrder.templates.map((template) =>
        template.name === name
          ? { ...template, quantity: quantity, name: newName }
          : template
      ),
    }));
  };

  const deleteTemplate = (name) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: prevOrder.templates.filter(
        (template) => template.name !== name
      ),
    }));
  };

  const clearTemplate = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: [],
    }));
  };

  const templateContainsDish = (name, dish) => {
    const template = order.templates.find((template) => template.name === name);
    if (!template) {
      return true;
    }

    const dishExists = template.menu.some(
      (existingDish) => existingDish.name === dish.name
    );
    if (dishExists) {
      return true;
    }
  };

  const addTemplateDish = (name, dish) => {
    if (templateContainsDish(name, dish)) {
      return;
    }

    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: prevOrder.templates.map((template) =>
        template.name === name
          ? { ...template, menu: [...template.menu, dish] }
          : template
      ),
    }));
  };

  const removeTemplateDish = (name, item) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: prevOrder.templates.map((template) =>
        template.name === name
          ? {
              ...template,
              menu: template.menu.filter((dish) => dish !== item),
            }
          : template
      ),
    }));
  };

  const clearAllCart = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      templates: prevOrder.templates.map((template) => {
        return { ...template, menu: [] };
      }),
      dishes: [],
    }));
  };

  const resetOrder = () => {
    setOrder({
      order_type: "",
      date: "",
      address: "",
      comment: "",
      templates: [],
      dishes: [],
    });
  };

  return (
    <OrderContext.Provider
      value={{
        value: order,
        changeOrderType: changeOrderType,
        changeDate: changeDate,
        changeAddress: changeAddress,
        changeComment: changeComment,
        clear: clearAllCart,
        templates: {
          value: order.templates,
          titles: templateTitles,
          add: addTemplate,
          change: changeTemplate,
          del: deleteTemplate,
          clear: clearTemplate,
          containsDish: templateContainsDish,
          addDish: addTemplateDish,
          removeDish: removeTemplateDish,
        },
        dishes: {
          value: order.dishes,
          contains: cartContainsDish,
          add: addToMenu,
          remove: removeFromMenu,
          count: changeCountMenu,
        },
        length: length,
        totalCost: totalCost,
        reset: resetOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
