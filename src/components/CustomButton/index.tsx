import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Button, Title } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function CustomButton({ children, ...rest }: ButtonProps) {
  return (
    <Button {...rest}>
      <Title>{children}</Title>
    </Button>
  );
}
