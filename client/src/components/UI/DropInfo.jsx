import { useState } from "react";

const DropInfo = ({ title, children, last }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-mainGray border-t-0 ${
        last ? "rounded-b-lg" : ""
      } overflow-hidden`}
    >
      <div
        className="flex justify-between items-center p-2 px-3 bg-gray-200 text-mainGray cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="transform transition-transform duration-200">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-1 px-3 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default DropInfo;
