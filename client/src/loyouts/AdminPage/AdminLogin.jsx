import MyInput from "@/components/UI/MyInput";

const AdminLogin = ({ setIsAdmin, navigate }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-1/4 bg-white rounded-3xl shadow-lg p-5">
        <div className="text-2xl font-thin text-center mb-4">Вход</div>
        <MyInput
          placeholder="Логин"
          className="text-black border-gray-500 my-2"
        />
        <MyInput
          placeholder="Пароль"
          type="password"
          className="text-black border-gray-500 my-2"
        />
        <button
          onClick={() => {
            localStorage.setItem("auth", "admin");
            setIsAdmin(true);
            navigate("/admin/menu");
          }}
          className="w-11/12 mx-[4%] my-2 text-xl text-center text-white py-1 bg-mainGreen rounded-xl hover:scale-105"
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
