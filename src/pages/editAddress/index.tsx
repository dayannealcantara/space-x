import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FormAddress, { Address } from '../../components/FormAddress';
import { AddressContext } from '../../context/AddressContext';
import { TitleAddAddress, WrapperAddAddress } from '../addAddress/styles';

const EditAddress = () => {
  const { id } = useParams();
  const { addresses, updateAddress } = useContext(AddressContext)!;
  const navigate = useNavigate();

  const idString = id !== undefined ? id : '';
  const idNumber = Number(idString);
  const addressToEdit = addresses.find(
    (address: Address) => address.id === idNumber
  );

  const handleUpdateAddress = (updatedAddress: Address) => {
    updateAddress(updatedAddress.id, updatedAddress);
    navigate('/');
  };

  if (!addressToEdit) {
    return <TitleAddAddress>Endereço não encontrado!</TitleAddAddress>;
  }

  return (
    <WrapperAddAddress>
      <TitleAddAddress>Editar Endereço</TitleAddAddress>
      {addressToEdit && (
        <FormAddress
          initialAddress={addressToEdit}
          onSubmit={handleUpdateAddress}
        />
      )}
    </WrapperAddAddress>
  );
};

export default EditAddress;
