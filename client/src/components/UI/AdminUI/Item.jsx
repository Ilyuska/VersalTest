import redactor from "@/assets/img/Admin/Redactor.png";

const Item = ({ children }) => {
  return (
    <tr>
      {children}
      <td className="border border-gray-300 ">
        <img src={redactor} alt="Changing" className="mx-auto" />
      </td>
    </tr>
  );
};

export default Item;
