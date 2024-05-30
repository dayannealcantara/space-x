import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import FormAddress, { Address } from '../../components/FormAddress';
import { AddressContext } from '../../context/AddressContext';
import { TitleAddAddress, WrapperAddAddress } from './styles';

export const AddAddress = () => {
  const { addAddress } = useContext(AddressContext)!;
  const navigate = useNavigate();

  const handleAddAddress = (newAddress: Address) => {
    if (addAddress) {
      addAddress(newAddress);
      navigate('/');
    }
  };

  return (
    <WrapperAddAddress>
      <TitleAddAddress>Adicionar Novo Endereço</TitleAddAddress>
      <FormAddress onSubmit={handleAddAddress} />
    </WrapperAddAddress>
  );
};

export default AddAddress;
