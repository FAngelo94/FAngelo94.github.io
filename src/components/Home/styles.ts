import styled from "styled-components";

export const Container = styled.section`
  padding-top: 85px;
  background: rgba(0,0,0,0);
  font-size: clamp(16px, 2vw, 24px);

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
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      max-width: 500px;
      width: 100%;
      height: auto;
      border-radius: 16px;
      margin: auto;

      @media(max-width: 600px){
        max-width: 250px;
      }
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

  /* Actions at bottom of Home section */
  .home-actions{
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .home-actions .button{
    margin-top: 0;
    padding: 1.2rem 2.4rem;
    font-size: clamp(16px, 2vw, 24px);
    flex: 1;
  }

  .home-actions .button-secondary{
    background: transparent;
    color: var(--green);
    border: 2px solid var(--green);
  }


  @media(max-width: 960px){
    display: block;
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
`