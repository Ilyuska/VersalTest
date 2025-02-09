import { useState } from "react";

const usePositiveInput = (initialValue, min, max) => {
  const [value, setValue] = useState(initialValue);

  const changeValue = (inputValue) => {
    if (inputValue === "") {
      setValue(""); // Разрешаем пустое значение
      return;
    }

    let newValue = parseInt(inputValue.replace(/\D/g, ""), 10);
    if (isNaN(newValue)) newValue = min;
    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;
    setValue(newValue.toString());
  };

  return [value, changeValue];
};

export default usePositiveInput;
