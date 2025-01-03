import { useEffect } from "react";
import TypesOfGuests from "./TypesOfGuests";
import CartItems from "./CartItems";
import MakingOrder from "./MakingOrder";

const Cart = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  return (
    <div className="mx-[7%] my-12 grid min-[1160px]:grid-cols-[2fr_1fr] gap-x-10">
      <div className="flex flex-col gap-y-16">
        <TypesOfGuests />
        <CartItems />
      </div>
      <div className="hidden min-[1160px]:block ">
        <MakingOrder />
      </div>
    </div>
  );
};

export default Cart;
