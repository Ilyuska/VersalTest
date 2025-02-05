const DropMenu = ({
  options,
  defaultValue,
  value,
  onChange,
  className,
  ...props
}) => {
  /*Деструктуризация (options -- массив обьектов с полями name и value Пр. {name: "По цене (возрастанию)",value:"price-asc"}
                      value -- изменяемое значение в useState, 
                      onChange -- функция для изменения значения в useState
                      defaultValue -- текст по умолчанию)
  */

  return (
    <select
      {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
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

export default DropMenu;
