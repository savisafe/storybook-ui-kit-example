import { useEffect, useState } from 'react';
import Input, { InputProps } from '../Input/Input.tsx';

interface CreditCardInputProps extends InputProps {
  formatFunc: (arg: string) => string;
}

const CreditCardInput = ({ onChange, value, name, type, id, className, onBlur, error, placeholder, maxLength, formatFunc }: CreditCardInputProps) => {
  const [formatedValue, setFormatedValue] = useState('');

  useEffect(() => {
    setFormatedValue(value ? formatFunc(value) : '');
  }, [formatFunc, value]);

  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={formatedValue}
      name={name}
      id={id}
      className={className}
      onBlur={onBlur}
      error={error}
      maxLength={maxLength}
    />
  );
};

export default CreditCardInput;
