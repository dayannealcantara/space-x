import { InputHTMLAttributes } from 'react';

import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function CustomInput({ ...rest }: InputProps) {
  return <Input {...rest} />;
}
