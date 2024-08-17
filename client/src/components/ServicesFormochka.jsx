const ServicesFormochka = (props) => {
  return (
    <div
      className={
        "text-white w-[140px] sm:w-[150px] md:w-[170px] lg:w-[245px] relative rounded-2xl mb-8 justify-self-center self-center"
      }
    >
      <img className="w-full rounded-2xl" src={props.pict} alt="pict" />
      <div className="absolute bottom-0 left-0 w-full rounded-b-2xl px-2 bg-shadow">
        <div className="border-b-white border-b-2 p-1 text-center">
          {props.title}
        </div>
        <div className="font-extralight text-sm  text-center pb-1">
          -Подробнее-
        </div>
      </div>
    </div>
  );
};

export default ServicesFormochka;
