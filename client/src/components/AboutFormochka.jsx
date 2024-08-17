const AboutFormochka = (props) => {
  return (
    <>
      <div className=" justify-self-center self-center w-[150px] h-[150px] md:w-[130px] md:h-[130px]  flex flex-col justify-center items-center text-xs border-0 rounded-xl shadow-3xl ">
        <img src={props.pict} alt="pict" className="w-1/2" />
        <div className="mx-auto font-semibold my-1 text-center">
          {props.title}
        </div>
        <div className="mx-auto text-center">{props.text}</div>
      </div>
    </>
  );
};

export default AboutFormochka;
