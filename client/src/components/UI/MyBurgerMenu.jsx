import { useEffect } from "react";

const MyBurgerMenu = ({ children, status, setStatus, burger }) => {
  if (!status) return null;

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setStatus(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setStatus]);

  return (
    <div
      onClick={() => setStatus(false)}
      className={`fixed inset-0 justify-end bg-[rgba(0,0,0,0.5)] flex z-20`}
    >
      <span
        onClick={() => setStatus(false)}
        className="absolute right-1/2 md:right-1/3 top-8 md:top-10 bg-mainGray rounded-l-xl cursor-pointer"
      >
        <img className="h-5 md:h-6 m-2" src={burger} alt="" />
      </span>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative h-2/3 w-1/2 md:w-1/3 bg-mainGray px-5 rounded-l-2xl `}
      >
        <div className="flex flex-col gap-3 pt-20 text-lg md:text-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyBurgerMenu;
