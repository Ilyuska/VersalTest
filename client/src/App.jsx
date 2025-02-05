import { BrowserRouter } from "react-router-dom";
import AuthProvider from "@/context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";
import OrderProvider from "./context/OrderProvider";

const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </OrderProvider>
    </AuthProvider>
  );
};

export default App;
