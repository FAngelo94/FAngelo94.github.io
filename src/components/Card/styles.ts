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

        h1{
          display: flex;
          align-items: baseline;
          gap: .8rem;
        }
        h1 small{
          font-size: 1.8rem;
          font-weight: 700;
          opacity: .85;
        }

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
        margin-bottom: 1rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 1rem;
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
    margin-bottom: 1.5rem;

    .project-links{
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        color: var(--green);
        display: flex;
        align-items: baseline;
        gap: .6rem;

        small{
          font-size: 1.4rem;
          font-weight: 600;
          opacity: 0.8;
        }
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
    margin-bottom: 1rem;
  }

  .body{
    cursor: pointer;
  }

  p{
    letter-spacing: 0.12rem;
    margin-bottom: 1rem;
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
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    .tech-list{
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 1.4rem;
      opacity: 0.6;
      flex-wrap: wrap;
    }
    .card-actions{
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;

      button {
        flex: 1;
      }
    }
    .card-cta{
      background: var(--green);
      color: #121212;
      border: 1px solid var(--green);
      border-radius: .8rem;
      padding: 0.9rem 1.4rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform .2s ease, filter .2s ease;
      &:hover{ transform: translateY(-2px); filter: brightness(1.05); }
      &:active{ transform: translateY(0); }
    }
    .card-cta.secondary{
      background: transparent;
      color: var(--green);
      border: 2px solid var(--green);
    }
  }

  /* bullet list for card content */
  .bullet-list{
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }
  .bullet-list li{
    position: relative;
    padding-left: 1.6rem;
    margin: .6rem 0;
  }
  .bullet-list li::before{
    content: '';
    position: absolute;
    left: 0;
    top: .8rem;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background: var(--green);
  }
`;
