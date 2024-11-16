import Filters from "@/components/UI/AdminUI/Filters";
import FiltersInput from "@/components/UI/AdminUI/FiltersInput";
import ListItems from "@/components/UI/AdminUI/ListItems";
import Item from "@/components/UI/AdminUI/Item";

const AdminUsers = () => {
  return (
    <>
      <Filters>
        <FiltersInput title="Имя пользователя:" type="text" />
        <FiltersInput title="Статус" type="text" />{" "}
        {/*ПЕРЕДЕЛАТЬ НА ВЫПАДАЮЩИЙ СПИСОК*/}
        <FiltersInput title="Заказы:" type="text" />
      </Filters>
      <ListItems
        titleTable="пользователей"
        colsName={["Имя пользователя", "Статус", "Заказы"]}
      >
        <Item>
          <td className="border border-gray-300 px-4 py-2">XX</td>{" "}
          <td className="border border-gray-300 px-4 py-2">XX</td>{" "}
          <td className="border border-gray-300 px-4 py-2">XX</td>
        </Item>
      </ListItems>
    </>
  );
};

export default AdminUsers;
