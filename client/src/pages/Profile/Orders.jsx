import { useEffect } from "react";
import Developing from "@/components/UI/Developing.jsx";

const Orders = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  return <Developing />;
};

export default Orders;
