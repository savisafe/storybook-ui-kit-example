import React from 'react';
import style from './radio.module.scss';

interface CustomRadioInputProps {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<CustomRadioInputProps> = ({ isChecked, onChange }) => {
  return (
    <label className={style.radioContainer}>
      <input type="radio" checked={isChecked} onChange={onChange} />
      <span className={style.checkmark} />
    </label>
  );
};
