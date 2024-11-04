import { SwiperSlide } from "swiper/react";
import MyModalWindow from "../MyModalWindow";
import MySlider from "../MySlider/MySlider";

const MyModalForProjects = ({ info, status, setStatus }) => {
  return (
    <MyModalWindow status={status} setStatus={setStatus}>
      <div className="text-center text-lg md:text-2xl lg:text-3xl font-thin my-5 px-4 w-[70vw]">
        {info.title}
      </div>
      <div className="flex flex-col gap-5 md:gap-10 my-5 md:my-10 w-[70vw] items-center justify-between px-5">
        <div className="w-11/12 ">
          <MySlider slides={{ sm: 1, md: 1, lg: 2 }}>
            {info.discription.images.map((i) => (
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-3xl h-full w-11/12 object-cover"
                    src={i}
                    alt="event's  photo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </MySlider>
        </div>

        <div className="text-center w-11/12 text-sm md:text-base lg:text-lg bg-mainGreen text-white p-2 md:p-5 rounded-3xl font-extralight">
          <div>Место мероприятия: {info.discription.place}</div>
          <div>Колличество гостей: {info.discription.guests}</div>
          <div>Тип мероприятия: {info.discription.type}</div>
        </div>
      </div>
    </MyModalWindow>
  );
};

export default MyModalForProjects;
