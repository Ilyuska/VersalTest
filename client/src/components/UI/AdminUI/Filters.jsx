const Filters = ({ children }) => {
  return (
    <div className="border-2 border-mainGray rounded-3xl my-12 ">
      <div className="text-3xl font-light text-white bg-mainGray px-7 py-3 rounded-t-2xl">
        Фильтры
      </div>
      <div className="my-5 grid grid-cols-3 gap-10">{children}</div>
      <div className="flex justify-end gap-5 m-4 text-white text-lg border-t-2 border-mainGray *:mt-4">
        <button className="bg-mainGreen p-1 w-1/6 rounded-2xl">
          Применить
        </button>
        <button className="bg-red-500 p-1 w-1/6 rounded-2xl">Очистить</button>
      </div>
    </div>
  );
};

export default Filters;
