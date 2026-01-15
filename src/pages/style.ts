import styled from "styled-components";

export const Container = styled.main`
  padding: 90px 20px;
  max-width: 980px;
  margin: 0 auto;
  color: inherit;

    li {
      margin-bottom: 0.6rem;
      color: inherit;
      &::marker {
        color: inherit;
      }
    }
    display: block;
    margin: 8px 0 20px;
    font-weight: 700;
  }

  h2 {
    margin-top: 22px;
  }

  hr {
    border: none;
    height: 1px;
    background: rgba(255,255,255,0.08);
    margin: 22px 0;
  }

  ul {
    margin-left: 1.6rem;
    padding-left: 0.8rem;

    li {
        list-style: disc;
      margin-bottom: 0.6rem;
    }
  }

  a {
    color: #fb804b;
  }
`;
