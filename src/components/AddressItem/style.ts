import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 700px;
  display: flex;
  gap: 48px;
  border-radius: 8px;
  padding: 16px;

  background: var(--dark-900);
  color: var(--white);

  @media (max-width: 450px) {
    width: 350px;
    padding: 20px;
  }
`;
export const CardAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardAddressTerra = styled.div`
  display: flex;
  aligh-items: center;
  gap: 16px;
`;

export const Img = styled.img`
  width:200px;
 height:200px;
 border-radius:50%;
 object-fit:cover;}

`;

export const InfoText = styled.p``;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const LinkBtn = styled(Link)`
  border: 2px solid var(--green-900);
  border-radius: 0.5rem;
  padding: 0.4rem;
  font-weight: bold;
  color: var(--green-900);
`;

export const Button = styled.button`
  border: 2px solid var(--red-900);
  border-radius: 0.5rem;
  background-color: transparent;
  color: var(--red-900);
  padding: 0.4rem;
  font-weight: bold;
  font-size: 16px;
`;
