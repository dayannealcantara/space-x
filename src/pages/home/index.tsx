import { useContext } from 'react';

import AddressItem from '../../components/AddressItem';
import { AddressContext } from '../../context/AddressContext';
import { ContainerCards, Image, WrapperAddress } from './styles';

const Home: React.FC = () => {
  const { addresses } = useContext(AddressContext)!;

  return (
    <WrapperAddress>
      {addresses.length === 0 ? (
        <Image src="/logo.png" alt="No addresses available" />
      ) : (
        <ContainerCards>
          {addresses.map((address) => (
            <AddressItem key={address.id} address={address} />
          ))}
        </ContainerCards>
      )}
    </WrapperAddress>
  );
};

export default Home;
