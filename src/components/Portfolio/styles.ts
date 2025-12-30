import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;

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

  .footer-text {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    margin-top: 10px;
  }

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

  .projects {
    /* no grid: cards are inside Swiper slides */
    padding: 0;
    }
  }

  /* Responsive handled by Swiper breakpoints */
`;

export const Accordion = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  place-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: black;

  button {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    gap: 2rem;
    background-color: var(--green);
    border-radius: 1.4rem;
    padding: 1.6rem 2.8rem;
    transition: background-color 0.25s;

    &:hover{
      background-color: var(--pink);
      color: #FFF;
    }
  }
`;
