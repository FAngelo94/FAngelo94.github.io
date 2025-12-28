import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  className?: string;
  children: React.ReactNode;
}

export function Carousel({ className = 'projects', children }: CarouselProps) {
  return (
    <Swiper
      className={className}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={24}
      breakpoints={{
        0: { slidesPerView: 1 },
        740: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
      }}
    >
      {React.Children.map(children, (child, idx) => (
        <SwiperSlide key={idx}>{child as React.ReactElement}</SwiperSlide>
      ))}
    </Swiper>
  );
}
