import redactor from "@/assets/img/Admin/Redactor.png";

const Item = ({ children }) => {
  return (
    <tr>
      <td className="border border-gray-300 text-center">
        <input type="checkbox" />
      </td>
      {children}
      <td className="border border-gray-300 ">
        <img src={redactor} alt="Changing" className="mx-auto" />
      </td>
    </tr>
  );
};

export default Item;
