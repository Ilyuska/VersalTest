import Filters from "@/components/UI/Filters";
import FiltersInput from "@/components/UI/FiltersInput";
import ListItems from "../ListItems";
import Item from "../Item";

const AdminOrders = () => {
  return (
    <>
      <Filters>
        <FiltersInput title="Номер:" type="text" />
        <FiltersInput title="Тип:" type="text" />
        <FiltersInput title="Место:" type="text" />
        <FiltersInput title="Статус:" type="text" />
        {/*ПЕРЕДЕЛАТЬ НА ВЫПАДАЮЩИЙ СПИСОК*/}
        <FiltersInput title="Кол-во гостей:" type="number" />
        <FiltersInput title="Сумма:" type="number" />
      </Filters>
      <ListItems
        titleTable="заказов"
        colsName={["Номер", "Тип", "Место", "Статус", "Кол-во гостей", "Сумма"]}
      >
        <Item>
          <td className="border border-gray-300 px-4 py-2">XX</td>
          <td className="border border-gray-300 px-4 py-2">XX</td>
          <td className="border border-gray-300 px-4 py-2">XX</td>
          <td className="border border-gray-300 px-4 py-2">XX</td>
          <td className="border border-gray-300 px-4 py-2">XX</td>
          <td className="border border-gray-300 px-4 py-2">XX ₽</td>
        </Item>
      </ListItems>
    </>
  );
};

export default AdminOrders;
