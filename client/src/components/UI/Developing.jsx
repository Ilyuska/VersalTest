import pict from "@/assets/img/banners/Developing.png";

const Developing = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-20 ">
      <div className="text-4xl font-extrabold">В РАЗРАБОТКЕ...</div>
      <img src={pict} alt="" className="w-[40vw]" />
    </div>
  );
};

export default Developing;
