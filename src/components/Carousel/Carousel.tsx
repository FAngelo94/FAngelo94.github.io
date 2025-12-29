import React from 'react';
import { Container } from './style';
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
  const paginationRef = React.useRef<HTMLDivElement>(null);
  const [swiperInst, setSwiperInst] = React.useState<any>(null);

  return (
    <Container>
      <Swiper
        className={className}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper: any) => setSwiperInst(swiper)}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          740: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1600: { slidesPerView: 4 },
        }}
      >
        {React.Children.map(children, (child, idx) => (
          <SwiperSlide key={idx}>{child as React.ReactElement}</SwiperSlide>
        ))}
      </Swiper>
      <div ref={paginationRef} className="swiper-pagination outside" />
      {/** Attach pagination after both swiper and ref are ready */}
      {React.useEffect(() => {
        const el = paginationRef.current;
        if (!swiperInst || !el) return;
        swiperInst.params.pagination = {
          ...(swiperInst.params.pagination || {}),
          el,
          clickable: true,
        } as any;
        try { swiperInst.pagination.destroy(); } catch {}
        swiperInst.pagination.init();
        swiperInst.pagination.render();
        swiperInst.pagination.update();
      }, [swiperInst, paginationRef.current])}
    </Container>
  );
}
