//Нужно скачать swiper
//  npm install swiper

import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules"; // Используйте модули из Swiper 8+
import "swiper/css"; // Основные стили Swiper
// import "swiper/css/navigation"; // Стили для навигации (если нужно вернуть стрелки то в modules пихаем Navigation + импортируем его)
import "swiper/css/pagination"; // Стили для пагинации
import "./swiperStyles.css"; // Ваш файл для кастомных стилей

const MySlider = ({ children, slides }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        // Устанавливаем количество слайдов в зависимости от ширины экрана
        300: {
          slidesPerView: slides.sm, // 1 слайд для экранов шире 640px
        },
        650: {
          slidesPerView: slides.md, // 2 слайда для экранов шире 768px
        },
        820: {
          slidesPerView: slides.lg, // 3 слайда для экранов шире 1024px
        },
      }}
      className="custom-swiper"
    >
      {children}
    </Swiper>
  );
};

export default MySlider;
