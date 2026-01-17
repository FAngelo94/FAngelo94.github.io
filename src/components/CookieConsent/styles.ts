import styled from "styled-components";

export const Banner = styled.div`
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 24px;
  z-index: 9999;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 980px;
  background: var(--green);
  color: #0b1416;
  border-radius: 12px;
  padding: 18px 22px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 6px;
`;

export const Description = styled.div`
  opacity: 0.95;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PrimaryBtn = styled.button`
  background: #fff;
  color: var(--green);
  border: 1px solid var(--green);
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
`;

export const SecondaryBtn = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.18);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
`;
