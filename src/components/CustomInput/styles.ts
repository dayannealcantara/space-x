import styled from 'styled-components';

export const Input = styled.input`
  margin-bottom: 1rem;
  height: 40px;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--dark-900);
  color: var(--white);
  padding: 1rem;
  border: 1px solid var(--dark-700);
  width: 100%;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
