import { useEffect, useState } from "react";
import MyTitle from "@/components/UI/MyTitle";
import image from "@/assets/img/banners/Trusts.jpg";
import Formochka from "../Home/OurTrusts/Formochka";

import { getTrusts } from "@/api/MainAPI";

const Trusts = ({ setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings({
      page: "information",
      pict: image,
      discription: "Нам доверяют",
    });
  }, [setHeaderSettings]);

  const [Trusts, setTrusts] = useState([]);

  useEffect(() => {
    const fetchTrusts = async () => {
      try {
        const trusts = await getTrusts();
        setTrusts(trusts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrusts();
  }, []);

  return (
    <>
      <MyTitle>Нам доверяют</MyTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 items-center content-center md:grid-cols-4 lg:grid-cols-5 gap-10 px-[7%] mb-20">
        {Trusts.map((item, index) => (
          <Formochka
            image={item.logo}
            information={item.information}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Trusts;
