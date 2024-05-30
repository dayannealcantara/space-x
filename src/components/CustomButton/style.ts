import styled from 'styled-components';

export const Button = styled.button`
  margin: auto;
  width: 50%;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--red-900);
  color: var(--white);
  padding: 0.4rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--white);
  padding: 0.4rem;
  &:hover {
    color: var(--black);
  }
`;
