import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLoyout = ({ settings }) => {
  return (
    <>
      <Header settings={settings} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLoyout;
