import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { WidgetCarCard } from '../WidgetCarCard/WidgetCarCard';
import { useData } from '../../hooks/useData';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constant/routes';
import styles from './SliderCarListWidget.module.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const SliderCarListWidget = () => {
  const { cars, isLoading, error } = useData();
  const navigate = useNavigate();
  console.log(isLoading, error);
  const swiperRef = useRef(null);

  //   if (!reviews.length) return; BiChevronLeft
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {cars.map(({ id, make, model, type, img, rentalPrice }) => (
          <SwiperSlide key={id}>
            <WidgetCarCard
              make={make}
              model={model}
              type={type}
              img={img}
              rentalPrice={rentalPrice}
              onClick={() => navigate(routes.CATALOG)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.btn_group}>
        <button
          type="button"
          aria-label="Prev button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BiChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BiChevronRight />
        </button>
      </div>
    </>
  );
};
