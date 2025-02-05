import MyModal from "./MyModal/MyModal";

const MyCodeForm = ({
  status,
  setStatus,
  code,
  setCode,
  phone,
  compliteCode,
}) => {
  if (!status) return null;

  return (
    <MyModal status={status} setStatus={setStatus}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (code.length == 6) {
            compliteCode();
          }
        }}
        className="flex flex-col p-5 gap-3 text-center"
      >
        <label className="text-2xl font-thin">Введите код из SMS</label>
        <div className="font-thin">
          Введите 6-значный код, который мы <br /> отправили на номер
          {phone}
          <br /> (Пока любые 6 цифр)
        </div>
        <input
          className="myInput text-center"
          type="text"
          value={code}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, "");
            setCode(value.slice(0, 6));
          }}
          maxLength={6}
          minLength={6}
          required
        />
        <button className="myButton w-full" type="submit">
          Подтвердить
        </button>
      </form>
    </MyModal>
  );
};

export default MyCodeForm;
