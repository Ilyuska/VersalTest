import { useEffect } from "react";

const Orders = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({ page: "others", pict: "", discription: "" });
  }, [setHeaderSettings]);

  return <div>Orders</div>;
};

export default Orders;
