import React from "react";

import Item from "../../components/UI/Item";

const MenuItems = ({ menuItems, addToCart, delFromCart }) => {
  return (
    <div className="grid mx-[10%] grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {menuItems.map((i, index) => (
        <Item
          info={i}
          key={index}
          addToCart={addToCart}
          delFromCart={delFromCart}
        />
      ))}
    </div>
  );
};

export default MenuItems;
