import Item from "./Item";

const MenuItems = ({ menuItems, addToCart, delFromCart }) => {
  return (
    <div className="mx-[10%] mb-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
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
