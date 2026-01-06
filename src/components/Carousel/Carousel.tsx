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
  const rootRef = React.useRef<HTMLDivElement>(null);
  const paginationRef = React.useRef<HTMLDivElement>(null);
  const [swiperInst, setSwiperInst] = React.useState<any>(null);

  React.useEffect(() => {
    const el = paginationRef.current;
    if (!swiperInst || !el) return;
    swiperInst.params.pagination = {
      ...(swiperInst.params.pagination || {}),
      el,
      clickable: true,
    } as any;
    try {
      swiperInst.pagination.destroy();
    } catch {}
    swiperInst.pagination.init();
    swiperInst.pagination.render();
    swiperInst.pagination.update();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperInst, paginationRef.current]);

  React.useEffect(() => {
    const equalize = () => {
      const root = rootRef.current;
      if (!root) return;
      const cards = Array.from(root.querySelectorAll<HTMLElement>('.tile-card'));
      if (!cards.length) return;
      cards.forEach((c) => (c.style.minHeight = ''));
      let max = 0;
      cards.forEach((c) => {
        max = Math.max(max, c.offsetHeight);
      });
      cards.forEach((c) => (c.style.minHeight = `${max}px`));
    };
    const run = () => setTimeout(equalize, 0);
    run();
    const onResize = () => equalize();
    window.addEventListener('resize', onResize);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fontsReady = (document as any).fonts?.ready;
    if (fontsReady && typeof fontsReady.then === 'function') {
      fontsReady.then(run);
    } else {
      window.addEventListener('load', run, { once: true } as any);
    }
    return () => window.removeEventListener('resize', onResize);
  }, [children]);

  return (
    <Container ref={rootRef}>
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
    </Container>
  );
}
