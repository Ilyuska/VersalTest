import { useEffect } from "react";
import { createPortal } from "react-dom";

// Стек для отслеживания модальных окон
let modalStack = [];

const MyModal = ({ children, status, setStatus }) => {
  if (!status) return null;

  useEffect(() => {
    // Добавляем текущее модальное окно в стек
    modalStack.push(setStatus);

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        // Проверяем, что текущее окно — верхнее в стеке
        if (modalStack[modalStack.length - 1] === setStatus) {
          setStatus(false);
          modalStack.pop(); // Удаляем текущее модальное окно из стека
        }
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      // Удаляем текущее модальное окно из стека при размонтировании
      const index = modalStack.indexOf(setStatus);
      if (index > -1) {
        modalStack.splice(index, 1);
      }
    };
  }, [setStatus]);

  return createPortal(
    <div
      onClick={() => {
        setStatus(false);
        const index = modalStack.indexOf(setStatus);
        if (index > -1) {
          modalStack.splice(index, 1); // Удаляем текущее модальное окно из стека при закрытии
        }
      }}
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-lg transition-transform transform duration-300 ease-in-out scale-100"
      >
        <span
          onClick={() => {
            setStatus(false);
            const index = modalStack.indexOf(setStatus);
            if (index > -1) {
              modalStack.splice(index, 1); // Удаляем текущее модальное окно из стека при закрытии
            }
          }}
          className="text-lg md:text-xl lg:text-2xl absolute right-2 md:right-5 md:top-2 font-semibold cursor-pointer hover:text-red-500 transition-colors"
        >
          x
        </span>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default MyModal;
