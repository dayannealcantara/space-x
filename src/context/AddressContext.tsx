import { createContext, ReactNode, useState } from 'react';

interface Address {
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

interface AddressContextProps {
  addresses: Address[];
  addAddress: (address: Address) => void;
  updateAddress: (id: number, updatedAddress: Address) => void;
  deleteAddress: (id: number) => void;
}

const AddressContext = createContext<AddressContextProps | undefined>(
  undefined
);

const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const addAddress = (address: Address) => {
    setAddresses([...addresses, address]);
  };

  const updateAddress = (id: number, updatedAddress: Address) => {
    setAddresses(
      addresses.map((address) => (address.id === id ? updatedAddress : address))
    );
  };

  const deleteAddress = (id: number) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <AddressContext.Provider
      value={{ addresses, addAddress, updateAddress, deleteAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressProvider };
