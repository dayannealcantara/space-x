import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { AddressContext } from '../../context/AddressContext';
import {
  Button,
  CardAddress,
  CardAddressTerra,
  CardContainer,
  ContainerButton,
  Img,
  InfoText,
  LinkBtn,
} from './style';

interface AddressItemProps {
  address: {
    id: number;
    country: string;
    state: string;
    city: string;
    street: string;
    number: string;
    lote: string;
    establishment: string;
    planet: string;
  };
}

const AddressItem = ({ address }: AddressItemProps) => {
  const { deleteAddress } = useContext(AddressContext)!;
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isMobileBtn = useMediaQuery({ query: '(max-width: 768px)' });

  const handleDeleteAddress = () => {
    deleteAddress(address.id);
    navigate('/');
  };

  return (
    <CardContainer>
      {!isMobile && <Img src="/logo.png" alt="Logo SpaceX" />}
      <CardAddress>
        <InfoText>
          <strong>Planeta: </strong>
          {address.planet}
        </InfoText>
        <InfoText>
          <strong>Estabelecimento:</strong> {address.establishment}
        </InfoText>
        {address.planet === 'Terra' && (
          <>
            <CardAddressTerra>
              <InfoText>
                <strong>País:</strong>
                {address.country}
              </InfoText>
              <InfoText>
                <strong>Estado: </strong>
                {address.state}
              </InfoText>
            </CardAddressTerra>
            <CardAddressTerra>
              <InfoText>
                <strong>Cidade: </strong>
                {address.city}
              </InfoText>
              <InfoText>
                <strong>Endereço: </strong>
                {address.street} {address.number}
              </InfoText>
            </CardAddressTerra>
          </>
        )}
        {address.planet === 'Marte' && (
          <InfoText>
            <strong>Lote:</strong>
            {address.lote}
          </InfoText>
        )}
        <ContainerButton>
          {isMobileBtn ? (
            <>
              <LinkBtn to={`/edit/${address.id}`}>Editar</LinkBtn>
              <Button onClick={handleDeleteAddress}>Deletar</Button>
            </>
          ) : (
            <>
              <LinkBtn to={`/edit/${address.id}`}>Editar endereço</LinkBtn>
              <Button onClick={handleDeleteAddress}>Deletar endereço</Button>
            </>
          )}
        </ContainerButton>
      </CardAddress>
    </CardContainer>
  );
};

export default AddressItem;
