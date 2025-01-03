const FiltersInput = ({
  title,
  type,
  value,
  minValue,
  maxValue,
  onChange,
  onChangeMin,
  onChangeMax,
}) => {
  return (
    <>
      {type == "text" ? (
        <div className="flex flex-col px-3">
          <div className="text-lg font-bold">{title}</div>
          <input
            type={type}
            placeholder={title}
            className="border-2 border-mainGray px-2 rounded-md"
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <div className="flex flex-col px-3">
          <div className="text-lg font-bold">{title}</div>
          <div className="flex flex-row justify-start">
            <input
              type="number"
              placeholder="От:"
              className="w-1/3 border-2 border-mainGray pl-2 rounded-md"
              value={minValue > 0 ? minValue : ""}
              onChange={onChangeMin}
            />
            <div className="mx-5">-</div>
            <input
              type={type}
              placeholder="До:"
              className="w-1/3 border-2 border-mainGray pl-2 rounded-md"
              value={maxValue > 0 ? maxValue : ""}
              onChange={onChangeMax}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersInput;
