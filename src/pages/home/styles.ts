import styled from 'styled-components';

export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  align-items: center;
  padding: 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

export const ContainerAddAddress = styled.div`
  display: flex;
  padding-left: 24px;
  align-items: center;
  gap: 24px;
  width: 600px;
  border-radius: 8px;
  border: 3px solid var(--dark-900);

  @media (max-width: 450px) {
    padding: 10px;
    align-items: center;
    gap: 10px;
    width: 150px;
  }
`;

export const ButtonAdd = styled.button`
  background: transparent;
  border: none;
  color: black;
`;
