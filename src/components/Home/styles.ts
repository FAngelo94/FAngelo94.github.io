import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  background: rgba(0,0,0,0);

  .home-body{
    display: flex;
    justify-content: space-between;
    gap: 8rem;
  }

  .home-title h1{
    font-size: clamp(2rem, 6vw, 6rem);
    line-height: 1.1;
    margin: 0;
  }

  .highlight{
    color: var(--green);
  }

  .center {
    text-align: center;
  }

    .home-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .home-image{
    img{
      max-width: 500px;
      width: 100%;
      height: auto;
      border-radius: 16px;
    }
  }

  /* Bullet list styling for home paragraphs */
  .bullet-list p{
    position: relative;
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  .bullet-list p::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 0.6rem;
    height: 0.6rem;
    background: var(--green);
    border-radius: 50%;
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .home-body{
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
    }
    .home-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .home-image{
      display: block;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }
`