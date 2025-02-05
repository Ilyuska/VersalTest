import MyModal from "./MyModal";
import MyInput from "../../UI/MyInput";

const MyModalForProfile = ({ title, status, setStatus }) => {
  const polya = {
    Имя: "Иван",
    Телефон: "+79999999999",
  };
  return (
    <MyModal status={status} setStatus={setStatus}>
      <form className="grid grid-cols-1 gap-3 p-7">
        <label className="text-center text-2xl font-light">{title}</label>
        {Object.keys(polya).map((key) => (
          <div>
            <div className="text-gray-600 pl-1 ">{key}</div>
            <MyInput
              className="border-mainGray w-full"
              placeholder={polya[key]}
              type={(key = "Телефон" ? "tel" : "text")}
            ></MyInput>
          </div>
        ))}
        <button className="myButton mt-3" type="submit">
          Сохранить
        </button>
      </form>
    </MyModal>
  );
};

export default MyModalForProfile;
