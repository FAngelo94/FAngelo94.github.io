import styled from "styled-components";
import { secondaryButton } from "../../styles/mixins";

export const Container = styled.section`
  margin-top: 5rem;

  header,
  p {
    text-align: center;
  }

  p {
    color: var(--green);
    font-weight: 500;
  }

  header h2 {
    font-size: 4rem;
  }

  .actions,
  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .actions {
    gap: 4rem;
    margin: 3rem 0 2rem;
  }

  .actions .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 45px;
    min-width: 250px;
    padding: 1rem 3rem;
    border-radius: 2rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  .actions .button img {
    width: 2.4rem;
  }
  ${secondaryButton}

  .social-links {
    gap: 1.6rem;
    margin-top: 2rem;
  }

  .social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
  }

  .social-links img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.95);
    transition: transform 0.2s ease, filter 0.2s ease;
  }

  .social-links a:hover img {
    transform: translateY(-2px);
    filter: brightness(1.2);
  }

  @media (max-width: 960px) {
    .actions {
      flex-direction: column;
      gap: 2rem;
      margin: 1rem 0;
    }
  }
`