import { useState } from "react";
import { CartContext } from "./index";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [guests, setGuests] = useState({});

  const addToCart = (item) => {
    item.count = 1;
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) =>
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));

  const changeItemCount = (itemId, count) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.map((item) => {
        if (item.id == itemId) {
          item.count = count;
        }
      });
      return updatedCart;
    });
  };

  const clearCart = () => setCart([]);

  const addToGuests = (named, count) => {
    setGuests((prevGuests) => ({ ...prevGuests, [named]: count }));
  };

  const removeFromGuests = (named) => {
    setGuests((prevGuests) => {
      const updatedGuests = { ...prevGuests };
      delete updatedGuests[named];
      return updatedGuests;
    });
    cart.map((item) => {
      if (item.count == named) {
        changeItemCount(item.id, 1);
      }
    });
  };

  const clearGuests = () => setGuests({});

  return (
    <CartContext.Provider
      value={{
        cart: {
          value: cart,
          add: addToCart,
          remove: removeFromCart,
          changeCount: changeItemCount,
          clear: clearCart,
        },
        guests: {
          value: guests,
          add: addToGuests,
          remove: removeFromGuests,
          clear: clearGuests,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
