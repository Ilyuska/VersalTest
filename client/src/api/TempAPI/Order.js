import { menu } from "./MenuItemsAPI";

export const order = {
    order_type: "",
    date: "",
    address: "ул. Пушкина д. 27",
    comment: "",
    templates: [
        {name: "VIP", quantity: 100, menu: [menu[3], menu[4]] },
        {name: "Children", quantity: 40, menu: [menu[4], menu[6]]},
    ],
    dishes: [
        {dish: menu[1], quantity: 100},
        {dish: menu[2], quantity: 10},
        {dish: menu[6], quantity: 50}
    ]
}