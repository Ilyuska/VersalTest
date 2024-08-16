import { useContext, useState } from "react";
import { AuthContext } from "../context";

const Main = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [cart, setCart] = useState(0);
  return (
    <>
      {!isAuth ? (
        <button onClick={() => setIsAuth(true)}>Main</button>
      ) : (
        <div>Menu</div>
      )}
    </>
  );
};

export default Main;
