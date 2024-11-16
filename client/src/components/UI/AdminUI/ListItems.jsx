import trash from "@/assets/img/Admin/Trash.png";
import plus from "@/assets/img/Admin/Plus.png";

const ListItems = ({ children, titleTable, colsName }) => {
  return (
    <div className="border-2 border-mainGray rounded-3xl my-12   ">
      <div className="text-3xl font-light text-white bg-mainGray px-7 py-3 rounded-t-2xl flex justify-between">
        <div>Список {titleTable}</div>
        <div className="flex h-10 gap-5">
          <img src={plus} alt="added" className="bg-mainGreen rounded-lg p-1" />
          <img
            src={trash}
            alt="deleted"
            className="bg-red-500 rounded-lg p-1"
          />
        </div>
      </div>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr className="border border-black">
            <th className="text-center">
              <input type="checkbox" />
            </th>
            {colsName.map((col, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {col}
              </th>
            ))}
            <th className="border border-gray-300 ">Действия</th>
          </tr>
        </thead>
        <tbody className="[&:last-child]:rounded-b-3xl">{children}</tbody>
      </table>
    </div>
  );
};

export default ListItems;

{
  /* <div className="grid grid-cols-[5%,1fr,1fr,1fr,1fr,10%] mt-4 border rounded-t-lg border-mainGray text-center  [&>*:not(:last-child)]:border-r *:border-mainGray *:p-1">
<div className="w-full h-full ">
  <input className="w-full h-full" type="checkbox" />
</div>

<div>Изображение</div>
<div>Наименование</div>
<div>Вес</div>
<div>Цена</div>
<div className="">Действие</div>
</div>
{children} */
}
