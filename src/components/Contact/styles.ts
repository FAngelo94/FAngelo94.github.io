import styled from "styled-components";


export const Container = styled.section`
  margin-top: 5rem;

  p{
      color: var(--green);
      font-weight: 500;
      text-align: center;
    }

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
  }

  .primary-actions{
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    gap: 1.6rem;
    place-items: center;
    margin-top: 3rem;

    .calendar{
      padding: 1rem 3rem;
      font-size: 1.8rem;
      min-width: 225px;
      border-radius: 2rem;
      height: 45px;
    }
  }

  .contacts{
    margin: 2rem 0;
    display: flex;
    gap: 4rem;
    justify-content: center;

    @media(max-width: 480px){
      margin: 1rem 0;
      gap: 2rem;
    }
  }

  .contact-btn{
    display: flex;
    justify-content: center;
    height: 45px;
    align-items: center;
    gap: 1rem;
    min-width: 225px;
    padding: 1.2rem 2.4rem;
    border: 2px solid var(--green);
    background: transparent;
    color: var(--green);
    border-radius: 2rem;
    font-weight: 500;
    
  }

  .contact-btn img{
    width: 2.4rem;
        color: var(--black);
        font-weight: 500;
      }
    }
  }

  .social-links{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin-top: 2rem;
    a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3.6rem;
      height: 3.6rem;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0.95);
      transition: transform .2s ease, filter .2s ease;
    }
    a:hover img{
      transform: translateY(-2px);
      filter: brightness(1.2);
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
    }
  }
  
`