import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyModalForProfile from "../MyModal/MyModalForProfile";

const MyBurgerUser = ({ status, setStatus, logout }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setStatus(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setStatus]);

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {status && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute -left-[17vh] w-[22vh] bg-white rounded-2xl border-mainGray border-2 z-10"
        >
          <div className="w-full text-2xl text-center text-mainGray cursor-pointer">
            <div
              onClick={() => {
                setModalOpen(true);
                setStatus(false);
              }}
              className="flex h-1/3 justify-center items-center shadow-xl hover:scale-95 py-1"
            >
              Профиль
            </div>

            <Link
              to="/orders"
              onClick={() => setStatus(false)}
              className="flex h-1/3 justify-center items-center  shadow-xl hover:scale-95 py-1"
            >
              Мои заказы
            </Link>
            <Link
              to="/"
              onClick={() => {
                logout();
                setStatus(false);
              }}
              className="flex h-1/3 justify-center items-center  shadow-xl  hover:scale-95 py-1 hover:text-red-400"
            >
              Выйти
            </Link>
          </div>
        </div>
      )}
      <MyModalForProfile
        status={isModalOpen}
        setStatus={setModalOpen}
        title="Редактировать профиль"
      />
    </>
  );
};

export default MyBurgerUser;
