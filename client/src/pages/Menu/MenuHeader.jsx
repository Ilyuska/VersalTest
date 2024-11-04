import Logo from "../../assets/img/Header/Logo.png";
import Cart from "../../assets/img/Menu/Cart.png";
import Profile from "../../assets/img/Menu/Profile.png";
import MyInput from "../../components/UI/MyInput";

const MenuHeader = ({ cart }) => {
  return (
    <header className="flex h-20 justify-between items-center bg-mainGray md:h-24 p-2">
      <div className="w-1/6 h-auto md:h-full">
        <img src={Logo} alt="logo" className="h-full" />
      </div>

      <div className="w-4/6">
        <MyInput placeholder="Поиск..." />
      </div>

      <div className="w-1/6 h-full flex items-center">
        <div className="relative w-1/2 h-auto md:p-3 md:h-full flex  justify-center">
          <img src={Cart} alt="cart" className="h-full" />
          {cart.length > 0 ? (
            <span className="absolute -top-2 -right-2 md:top-3 md:right-0 lg:right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="w-1/2  h-auto ml-2 md:p-3 md:h-full">
          <img src={Profile} alt="profile" className="h-full " />
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
