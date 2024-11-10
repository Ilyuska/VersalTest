import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/index";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
