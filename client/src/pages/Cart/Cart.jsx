import { useEffect, useState } from "react";
import TypesOfGuests from "./TypesOfGuests";
import CartItems from "./CartItems";
import MakingOrder from "./MakingOrder";
import MyModal from "@/components/simple/MyModal/MyModal";

const Cart = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  const [modalConfirm, setModalConfirm] = useState(false);

  return (
    <div className="mx-[7%] my-12 grid min-[1360px]:grid-cols-[2fr_1fr] gap-x-10">
      <div className="flex flex-col gap-y-16">
        <TypesOfGuests />
        <CartItems status={modalConfirm} setStatus={setModalConfirm} />
      </div>
      <div className="hidden min-[1360px]:block ">
        <MakingOrder
          setModal={modalConfirm}
          setModalConfirm={setModalConfirm}
        />
      </div>
      <MyModal status={modalConfirm} setStatus={setModalConfirm}>
        <div className="flex flex-col">
          <div className="text-3xl font-light text-white bg-mainGray text-center py-3 rounded-t-lg">
            Заказ принят
          </div>
          <div className="flex flex-col px-5 py-2 gap-4">
            <div className="text-xl  text-center">
              Спасибо за выбор нашей компании))
            </div>

            <button
              className="myButton w-full"
              onClick={() => setModalConfirm(false)}
            >
              Смотреть заказ
            </button>
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default Cart;
