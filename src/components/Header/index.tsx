import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import {
  AddAddress,
  ButtonAdd,
  ButtonText,
  ContainerAddAddress,
  ContainerLogo,
  HeaderContainer,
  LogoDelivery,
  LogoSpace,
} from './header';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  return (
    <HeaderContainer>
      <Link to="/">
        <ContainerLogo>
          <LogoSpace>Space</LogoSpace>
          <LogoDelivery>X</LogoDelivery>
        </ContainerLogo>
      </Link>

      <ContainerAddAddress>
        <ButtonAdd>
          {!isMobile && <ButtonText to="/add">+</ButtonText>}
        </ButtonAdd>
        <AddAddress to="/add">Novo Endereço</AddAddress>
      </ContainerAddAddress>
    </HeaderContainer>
  );
};

export default Header;
