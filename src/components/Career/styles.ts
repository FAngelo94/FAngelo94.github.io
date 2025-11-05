import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
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
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      a ~ a {
        margin-left: 10px;
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
          
          a {
            color: var(--green);
          }
        }

        img {
          height: 40px;
        }

        a > img {
          width: 2.6rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
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