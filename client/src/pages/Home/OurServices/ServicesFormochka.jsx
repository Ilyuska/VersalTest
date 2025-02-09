const ServicesFormochka = ({ pict, title }) => {
  return (
    <div className="relative w-4/5 h-32 lg:h-52 text-white rounded-2xl mb-8 mx-auto text-center text-sm md:text-base lg:text-lg hover:scale-105 transition-transform duration-300">
      <img
        className="rounded-2xl w-full h-full object-cover"
        src={pict}
        alt={title}
      />
      <div className="flex flex-col justify-end absolute inset-0 bg-black bg-opacity-30 rounded-2xl hover:bg-opacity-0">
        <div className="">{title}</div>
        <div className="border-t-2 border-white mx-3 text-sm pb-1">
          -Подробнее-
        </div>
      </div>
    </div>
  );
};

export default ServicesFormochka;
