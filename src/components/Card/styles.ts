import styled from "styled-components";

export const Container = styled.section`
display: absolute;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }

    

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      color: #fff;

      position: fixed;
      top: 60px;
      left: 0;
      bottom: 0;
      right: 0;

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
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--green);

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

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        white-space: pre-wrap;
        a {
          color: #ffff;
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
