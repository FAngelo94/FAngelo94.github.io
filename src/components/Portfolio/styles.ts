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

  .projects {
    /* no grid: cards are inside Swiper slides */
    padding: 0;

    .project {
  padding: 2rem 1.8rem;
  background-color: var(--card-bg);
  border-radius: 1.2rem;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--card-text);
  border: 1px solid var(--card-border);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      
      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        img {
          height: 40px;
        }

        a > img {
          width: 2.6rem;
          height: unset;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      .body {
          cursor: pointer;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
          a {
          color: var(--card-link);
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
      }
        }
      }
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
