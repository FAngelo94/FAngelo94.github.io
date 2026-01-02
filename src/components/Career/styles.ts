import styled from "styled-components";
import { swiperOutsidePagination } from "../../styles/mixins";


export const Container = styled.section`
  margin-top: 5rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  ${swiperOutsidePagination}

  .projects{
    padding: 0;
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