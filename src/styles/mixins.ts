import { css } from "styled-components";

export const swiperOutsidePagination = css`
  /* Swiper container overrides */
  .swiper {
    padding: 1rem;
    overflow: visible;
  }

  .swiper-slide {
    height: auto;
  }
  .swiper-wrapper {
    align-items: stretch;
  }

  /* Place pagination below the carousel, centered */
  .swiper-pagination.outside{
    position: static;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    transform: none;
  }

  /* Hide default inner pagination to avoid overlap */
  .projects .swiper-pagination{
    display: none !important;
  }

  /* Bullet styling (outside) */
  .swiper-pagination.outside .swiper-pagination-bullet{
    background: var(--card-border);
    opacity: 0.6;
  }
  .swiper-pagination.outside .swiper-pagination-bullet-active{
    background: var(--green);
    opacity: 1;
  }
`;

export const sectionTitle = css`
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  .subtitle {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5rem;
  }
`;

export const footerText = css`
  .footer-text {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    margin-top: 10px;
  }
`;

export const secondaryButton = css`
  .button.button-secondary {
    border: 2px solid var(--green);
    background: transparent;
    color: var(--green);
  }
`;
