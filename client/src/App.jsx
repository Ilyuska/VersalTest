import { BrowserRouter } from "react-router-dom";
import AuthProvider from "@/context/AuthProvider";
import CartProvider from "@/context/CartProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
