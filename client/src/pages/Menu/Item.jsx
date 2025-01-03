const Item = ({ info, addToCart, delFromCart }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="h-3/4 w-full">
        <img
          src={info.photo}
          alt="bludo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="h-1/4 w-full">
        <div className="h-11 font-semibold line-clamp-2 text-ellipsis text-sm lg:text-base">
          {info.name + " " + String(info.weight)}гр
        </div>
        <div className="flex  gap-1">
          <div className="w-1/3 flex items-center justify-cente font-bold  text-xl md:text-3xl">
            {info.price}₽
          </div>
          {info.count == 0 ? (
            <div
              className="w-2/3 flex items-center justify-center text-base md:text-xl font-semibold  text-white bg-mainGreen rounded-2xl hover:scale-95 cursor-pointer"
              onClick={() => addToCart(info)}
            >
              В корзину
            </div>
          ) : (
            <div
              className="w-2/3 flex items-center justify-center text-center text-base font-semibold rounded-2xl bg-black bg-opacity-20 hover:scale-95 cursor-pointer"
              onClick={() => delFromCart(info.id)}
            >
              Добавлено
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
