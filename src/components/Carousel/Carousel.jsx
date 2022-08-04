// import React, { useRef, useState } from "react";
// Import Swiper React components
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
/*     const swiper = new Swiper('.swiper', {
        swiper.height: {

        }
    }); */

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
        // noSwipingClass="img"
        noSwipingSelector="img"
        watchSlidesProgress={true}
      >
        <SwiperSlide><img alt="pic" src={picture}/></SwiperSlide>
        <SwiperSlide><img alt="pic" src={picturemtb}/></SwiperSlide>
        <SwiperSlide><img alt="pic" src={picture}/></SwiperSlide>
        <SwiperSlide><img alt="pic" src={picturemtb}/></SwiperSlide>
        {/*<SwiperSlide>Slide 4</SwiperSlide>
         <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </div>
  );
}
