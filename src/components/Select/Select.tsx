import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './select.module.scss';
import DropdownWindowList from './dropdown-window-list';
import DropdownWindow from './dropdown-window';
import CloseIcon from './icons/close.svg';
import SelectIcon from './icons/select-icon.svg';
import ErrorIcon from './icons/caption.svg';
import Icon from '../Icon/Icon.tsx';

export interface SelectOption {
  id: string;
  title: string;
}

export interface Option {
  title: string;
  id: string;
  slug: string;
  active: boolean;
}

interface SelectProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange: (value: string) => void;
  value: string;
  error?: boolean;
  disabled?: boolean;
  caption?: string;
  placeholder?: string;
  label?: string;
  selectOptions: SelectOption[];
  autoComplete?: 'off';
  className?: string;
}

const Select: React.FC<SelectProps> = ({ selectOptions, value, onChange, error, disabled, caption, placeholder, label, autoComplete, className, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    rest.onBlur && rest.onBlur(e);
  };

  const onClear = () => {
    onChange('');
  };

  return (
    <div className={cn(styles.wrap, error && styles.error, disabled && styles.disabled)} ref={inputRef}>
      <div className={styles.field}>
        <input
          {...rest}
          type="text"
          value={value}
          className={cn(styles.input, label && styles.inputWithLabel, className, isExpanded && styles.openDropdown)}
          onChange={(event) => onChange(event.target.value)}
          onClick={() => setIsExpanded(true)}
          onBlur={onBlur}
          autoComplete={autoComplete}
        />
        {!value && <p className={cn(styles.placeholder, label && styles.placeholderWithLabel)}>{placeholder}</p>}
        {label && <div className={styles.label}>{label}</div>}
        <div onClick={handleClick} className={cn(styles.selectBtn, isExpanded ? styles.reverseSelectBtn : '')}>
          <Icon width={20} height={20}>
            <SelectIcon />
          </Icon>
        </div>
        {isExpanded && !disabled && selectOptions.length !== 0 && (
          <DropdownWindow>
            <DropdownWindowList onItemClick={onChange} closeDropdown={setIsExpanded} selectOptions={selectOptions} />
          </DropdownWindow>
        )}
        {value && !disabled && (
          <div className={styles.clearBtn} onClick={() => onClear()}>
            <Icon width={20} height={20}>
              <CloseIcon />
            </Icon>
          </div>
        )}
      </div>
      {caption && !isExpanded && (
        <div className={styles.caption}>
          <Icon width={15} height={15}>
            <ErrorIcon />
          </Icon>
          {caption}
        </div>
      )}
    </div>
  );
};

export default Select;
