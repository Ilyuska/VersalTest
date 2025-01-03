import trash from "@/assets/img/Admin/Trash.png";
import MyModalWindow from "../../components/UI/MyModalWindow";

const TrashModal = ({ status, setStatus, clear, title, text }) => {
  return (
    <>
      <img
        src={trash}
        alt="cartClear"
        className="bg-red-500 p-2 w-9 md:w-11 h-auto rounded-xl cursor-pointer hover:scale-95"
        onClick={() => setStatus(true)}
      />
      <MyModalWindow status={status} setStatus={setStatus}>
        <div className="px-10 py-2  max-w-xs">
          <div className="text-2xl text-center">
            Вы уверены, что хотите очистить {title}?
          </div>
          <div className="my-6 text-center">
            Будут удалены ВСЕ {text} безвозвратно.
          </div>
          <div className="flex justify-around">
            <button
              className="bg-mainGreen rounded-lg p-2 text-white hover:scale-95"
              onClick={() => {
                clear();
                setStatus(false);
              }}
            >
              Да, очистить
            </button>
            <button
              className="bg-red-500 rounded-lg p-2 text-white hover:scale-95"
              onClick={() => setStatus(false)}
            >
              Отменить
            </button>
          </div>
        </div>
      </MyModalWindow>
    </>
  );
};

export default TrashModal;
