import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLoyout = ({ isMainPage, ...props }) => {
  return (
    <>
      <Header
        isMainPage={isMainPage}
        pict={props.pict}
        discription={props.discription}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLoyout;
