import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/index";
import AppRoutes from "./components/routes/AppRoutes";
import Footer from "./components/Loyout/Footer";
import Header from "./components/Loyout/Header";

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
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
