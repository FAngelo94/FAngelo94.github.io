import styled from "styled-components";

export const Container = styled.section`
display: absolute;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }

    

    .project {
      padding: 2rem 1.8rem;
      background-color: var(--card-bg);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      color: var(--card-text);
      position: fixed;
      top: 60px;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 2000;

      margin: 30px;
      
      .body {
        overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

        //hide overflow
        &::-webkit-scrollbar {
          display: none;
        }
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--green);
        margin-bottom: rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--card-border);

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        img {
          height: 20px;
          cursor: pointer;
        }

        a > img {
          width: 2.6rem;
          height: unset;
        }
  }

  /* overlay appearance */
  border: 1px solid var(--card-border);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        white-space: pre-wrap;
        a {
          color: var(--card-link);
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

        .tech-list {
          margin-top: auto;
          color: var(--green);
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;

// Shared tile card styles used across Prices, Career, Portfolio
export const TileCard = styled.div`
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

    img{
      height: 40px;
    }

    a > img{
      width: 2.6rem;
      height: unset;
    }
  }

  h3{
    margin-bottom: 2rem;
  }

  .body{
    cursor: pointer;
  }

  p{
    letter-spacing: 0.12rem;
    margin-bottom: 2rem;
    a{
      color: var(--card-link);
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
      flex-wrap: wrap;
    }
  }
`;
