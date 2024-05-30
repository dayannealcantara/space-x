import { ChangeEvent, FormEvent, useState } from 'react';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import {
  ContainerAddress,
  ContainerRadio,
  Form,
  Label,
  OptionPlanet,
} from './styles';

export interface Address {
  id: number;
  country: string;
  state: string;
  city: string;
  street: string;
  number: string;
  lote: string;
  establishment: string;
  planet: string;
}

interface AddressFormProps {
  initialAddress?: Address;
  isEditMode?: boolean;
  onSubmit: (address: Address) => void;
}

const FormAddress = ({ initialAddress, onSubmit }: AddressFormProps) => {
  const [address, setAddress] = useState({
    id: initialAddress ? initialAddress.id : Date.now(),
    country: initialAddress ? initialAddress.country : '',
    state: initialAddress ? initialAddress.state : '',
    city: initialAddress ? initialAddress.city : '',
    street: initialAddress ? initialAddress.street : '',
    number: initialAddress ? initialAddress.number : '',
    lote: initialAddress ? initialAddress.lote : '',
    establishment: initialAddress ? initialAddress.establishment : '',
    planet: initialAddress ? initialAddress.planet : 'Terra',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'lote') {
      const newValue = value.slice(0, 4);
      return setAddress(prevAddress => ({
        ...prevAddress,
        [name]: newValue,
      }));
    }
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerRadio>
        <Label>
          <input
            type="radio"
            name="planet"
            value="Terra"
            checked={address.planet === 'Terra'}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <OptionPlanet>Terra</OptionPlanet>
        </Label>
        <Label>
          <input
            type="radio"
            name="planet"
            value="Marte"
            checked={address.planet === 'Marte'}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <OptionPlanet>Marte</OptionPlanet>
        </Label>
      </ContainerRadio>
      <CustomInput
        name="establishment"
        value={address.establishment}
        onChange={handleChange}
        placeholder="Fábrica ou local de armazenamento"
      />
      {address.planet === 'Terra' && (
        <>
          <ContainerAddress>
            <CustomInput
              name="country"
              value={address.country}
              onChange={handleChange}
              placeholder="País"
            />
            <CustomInput
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="Estado"
            />
          </ContainerAddress>
          <ContainerAddress>
            <CustomInput
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="Cidade"
            />
            <CustomInput
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="Endereço"
            />
            <CustomInput
              name="number"
              value={address.number}
              onChange={handleChange}
              placeholder="Número"
              type="number"
            />
          </ContainerAddress>
        </>
      )}
      {address.planet === 'Marte' && (
        <CustomInput
          name="lote"
          value={address.lote}
          onChange={handleChange}
          placeholder="Lote (4 dígitos)"
          type="number"
        />
      )}
      <CustomButton type="submit">Salvar</CustomButton>
    </Form>
  );
};

export default FormAddress;
