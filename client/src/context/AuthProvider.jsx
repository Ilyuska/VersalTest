import { useState, useEffect } from "react";
import { AuthContext } from "./index";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Проверяем наличие токена в localStorage при загрузке приложения
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
      setIsAuth(true);
    }
  }, []);

  const login = (username) => {
    const authToken = username;
    localStorage.setItem("authToken", authToken); // Сохраняем токен
    setToken(authToken);
    setIsAuth(true);
  };

  // Вернуть когда будет сервер куда буду отправлять запрос на получение токена
  //   async (username, password) => {
  //     try {
  //       const response = await axios.post("https://your-api.com/login", {
  //         username,
  //         password,
  //       });
  //       const authToken = response.data.token;
  //       localStorage.setItem("authToken", authToken); // Сохраняем токен
  //       setToken(authToken);
  //       setIsAuth(true);
  //     } catch (error) {
  //       console.error("Login failed:", error.response.data.message);
  //     }
  //   };

  const logout = () => {
    localStorage.removeItem("authToken"); // Удаляем токен
    setToken(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
