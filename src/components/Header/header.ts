import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoSpace = styled.p`
  color: var(--white);
  font-family: Roboto;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  position: absolute;

  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const LogoDelivery = styled.p`
  color: var(--green-900);
  font-family: Roboto;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  position: relative;
  margin-left: 160px;

  @media (max-width: 450px) {
    font-size: 32px;
    margin-left: 70px;
  }
`;

export const ContainerAddAddress = styled.div`
  display: flex;
  padding-left: 16px;
  align-items: center;
  gap: 24px;
  width: 200px;
  border-radius: 8px;
  background: var(--dark-900);

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

export const ButtonText = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: var(--green-900);

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const AddAddress = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: var(--green-900);
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
