import MyModal from "./MyModal";
import MyInput from "../../UI/MyInput";

const MyModalForProfile = ({ title, status, setStatus }) => {
  const polya = {
    Имя: "Иван",
    Фамилия: "Иванов",
    Организация: "Версаль",
    Почта: "example@mail.ru",
    Телефон: "+79999999999",
  };
  return (
    <MyModal status={status} setStatus={setStatus}>
      <div className="text-center text-2xl m-8 ">{title}</div>
      <form action="" className="grid grid-cols-1 gap-3 md:grid-cols-2 p-3">
        {Object.keys(polya).map((key) => (
          <div>
            <div className="text-gray-600 pl-1 ">{key}</div>
            <MyInput
              className="border-mainGray w-full"
              placeholder={polya[key]}
              type={
                key == "Почта" ? "mail" : (key = "Телефон" ? "tel" : "text")
              }
            ></MyInput>
          </div>
        ))}
        <button
          className=" my-5 w-full bg-mainGreen py-3 text-white rounded-2xl hover:scale-95 md:col-span-2"
          type="submit"
        >
          Сохранить
        </button>
      </form>
    </MyModal>
  );
};

export default MyModalForProfile;
