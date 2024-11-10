import { useEffect } from "react";
import MyTitle from "@/components/UI/MyTitle";
import image from "@/assets/img/Header/Trusts.jpg";
import Formochka from "../Home/OurTrusts/Formochka";

//Сдесь будет API
import information from "@/api/TempAPI/OurTrusts/information";

const Trusts = ({ setIsMainPage, setHeaderPict }) => {
  useEffect(() => {
    setIsMainPage(false);
    setHeaderPict({ pict: image, discription: "Нам доверяют" });
  }, [setIsMainPage, setHeaderPict]);

  return (
    <>
      <MyTitle>Нам доверяют</MyTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 items-center content-center md:grid-cols-4 lg:grid-cols-5 gap-10 px-[7%] mb-20">
        {information.map((i) => (
          <Formochka image={i.logo} information={i.information} />
        ))}
      </div>
    </>
  );
};

export default Trusts;
