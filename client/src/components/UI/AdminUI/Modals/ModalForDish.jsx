import { useState } from "react";
import MyModalWindow from "../../MyModalWindow";
import trash from "@/assets/img/Admin/Trash.png";

const ModalForDish = ({ status, setStatus, title }) => {
  return (
    <MyModalWindow status={status} setStatus={setStatus}>
      <div className="w-[60vw]">
        <div className="text-center text-2xl font-semibold my-5">{title}</div>
        <div className="grid grid-cols-2 my-8">
          <div className="flex flex-col items-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex flex-col items-center justify-center w-72 h-72 border-2 border-dashed border-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="mt-2 text-base text-gray-600">
                Добавить фото
              </span>
            </label>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => console.log(e.target.files[0])}
            />
          </div>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <div>
              <div>Добавить</div>
            </div>
          </div>
        </div>
      </div>
    </MyModalWindow>
  );
};

export default ModalForDish;
