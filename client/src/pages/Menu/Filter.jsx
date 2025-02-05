const Filter = ({ options, onClick }) => {
  return (
    <div className="flex flex-wrap gap-y-3">
      {options.map((i) => (
        <div
          className="bg-mainGray rounded-md text-white text-lg  mr-3 px-12 py-2 shadow-3xl cursor-pointer"
          onClick={() => onClick(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Filter;
