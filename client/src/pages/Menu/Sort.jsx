const Sort = ({ options, defaultValue, value, onChange }) => {
  //Деструктуризация (options -- массив обьектов с полями name и value Пр. {name: "По цене (возрастанию)",value:"price-asc"})
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md bg-white border-mainGray border-[3px] text-mainGray text-lg cursor-pointer"
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Sort;
