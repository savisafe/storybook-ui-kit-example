import React, { FC, useState } from 'react';
import cn from 'classnames';
import { merge } from 'lodash';
import styles from './input.module.scss';
import CloseIcon from './Icons/close.svg';
import ErrorIcon from './Icons/caption.svg';
import GenerateIcon from './Icons/generate.svg';
import { Icon } from '../index.ts';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  error?: boolean;
  disabled?: boolean;
  caption?: string;
  placeholder?: string;
  generate?: boolean;
  generatePromoCode?: () => void;
}

const Input: FC<InputProps> = ({
                                 className,
                                 value,
                                 placeholder,
                                 onChange,
                                 error,
                                 disabled,
                                 caption,
                                 generate,
                                 generatePromoCode,
                                 ...rest
                               }) => {
  const [focus, setFocus] = useState(false);

  const onBlur = (e) => {
    !value && setFocus(false);
    rest.onBlur && rest.onBlur(e);
  };

  const onClear = (event) => {
    setFocus(false);
    const emptyEvent = merge({}, event, {
      target: { value: '', name: rest.name, id: rest.id },
    });
    onChange(emptyEvent);
  };

  return (
      <div className={cn(styles.wrap, error && styles.error, disabled && styles.disabled)}>
        <div className={cn(styles.field, focus || value ? styles.fieldSelected : '')}>
          <input
              {...rest}
              type="text"
              value={value}
              className={cn(styles.input, className)}
              onChange={(event) => onChange(event)}
              onClick={() => setFocus(true)}
              onBlur={onBlur}
          />
          {<p className={styles.placeholder}>{placeholder}</p>}
          {value && !disabled && (
              <div className={styles.clearBtn} onClick={(event) => onClear(event)}>
                <Icon width={20} height={20}>
                  <CloseIcon />
                </Icon>
              </div>
          )}
        </div>
        {caption && (
            <div className={styles.caption}>
              <Icon width={15} height={15}>
                <ErrorIcon />
              </Icon>
              {caption}
            </div>
        )}
        {!value && generate && (
            <button className={styles.generate} onClick={generatePromoCode}>
              <Icon width={16} height={16}>
                <GenerateIcon />
              </Icon>
              Сгенерировать
            </button>
        )}
      </div>
  );
};
export default Input;
