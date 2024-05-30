import styled from 'styled-components';

export const WrapperAddAddress = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 50px;
`;

export const TitleAddAddress = styled.h3`
  color: var(--white);
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
