import styled from "styled-components";

export const Container = styled.section`
margin-top: 5rem;
  background: rgba(0,0,0,0);

  .hero-body{
    display: flex;
    justify-content: space-between;
    gap: 8rem;
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover span {
      display: block;
    }

    span {
      position: absolute;
      left: 50%;
      bottom: -70%;
      transform: translate(-50%,-50%);
      display: none;
    }

    img{
      width: 3.4rem;
    }
  }

  .hero-text{
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

  .hero-image{
    img{
      max-width: 500px;
      width: 100%;
      height: auto;
      border-radius: 16px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-body{
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
    }
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
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