const PhoneInput = ({ phone, setPhone }) => {
  const handleChange = (e) => {
    // Форматирование номера телефона (например, +7 (999) 999-99-99)
    let value = e.target.value.replace(/\D/g, ""); // Убираем все нечисловые символы
    if (value[0] != 7) {
      value = "7";
    }
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    const formatted = value
      .replace(/(\d{1})/, "+$1 ")
      .replace(/(\+\d{1})\s(\d{3})(\d)/, "$1 ($2) $3")
      .replace(/(\+\d{1}\s\(\d{3}\)\s\d{3})(\d{2})(\d{2})/, "$1-$2-$3");
    setPhone(formatted);
  };

  return (
    <input
      type="tel"
      value={phone}
      onChange={handleChange}
      maxLength={16}
      minLength={16}
      placeholder="+7 (999) 999-99-99"
      className="myInput"
      required
    />
  );
};

export default PhoneInput;
