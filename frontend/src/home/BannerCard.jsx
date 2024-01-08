import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
 import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './bannerCard.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function BannerCard() {
  return (
    <div className='h-40 w-80 mt-[-200px]'>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="bg-red-500 mt-[100px]"
      >
        <SwiperSlide>
          <img src="src/assets/bookCovers/book1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/bookCovers/book2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/bookCovers/book3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/bookCovers/book4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/bookCovers/book5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/bookCovers/book6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
