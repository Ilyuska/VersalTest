import { useState } from "react";
import MyModalForTrusts from "@/components/simple/MyModal/MyModalForTrusts";

const Formochka = ({ image, information }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center  h-[15vh] py-2">
        <img
          className="transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-xl border-r border-b border-gray-300 shadow-md"
          src={image}
          alt="компания"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <MyModalForTrusts
        info={information}
        status={isOpen}
        setStatus={setIsOpen}
      />
    </>
  );
};

export default Formochka;
