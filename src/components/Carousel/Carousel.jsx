import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import picturemtb from "../../assets/images/mtb.jpg";
import picture from "../../assets/images/picture.jpg";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className="black-frame">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        noSwiping={true}
        noSwipingSelector="img"
        watchSlidesProgress={true}
      >
        <SwiperSlide>
          <h2>Ruta #1: 132 km</h2>  {/* //TODO  */}
          <h3>Peralada - Girona</h3>
          <img alt="pic" src={picture} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="pic" src={picturemtb} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="pic" src={picture} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="pic" src={picturemtb} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
