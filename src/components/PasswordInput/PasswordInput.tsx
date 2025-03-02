import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./password-input.module.scss";
import EyeIcon from "./icons/eye-icon.svg";
import ErrorIcon from "./icons/caption.svg";
import Icon from "../Icon/Icon";
import StrengthIndicator from "./StrengthIndicator.tsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  error?: boolean;
  disabled?: boolean;
  caption?: string;
  placeholder?: string;
  strengthIndicator?: boolean;
}

const PasswordInput: FC<Props> = ({
  className,
  value,
  placeholder,
  onChange,
  error,
  disabled,
  caption,
  strengthIndicator = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [focus, setFocus] = useState(false);

  const onBlur = (e) => {
    setFocus(false);
    rest.onBlur && rest.onBlur(e);
  };

  return (
    <div
      className={cn(
        styles.wrap,
        error && styles.error,
        disabled && styles.disabled
      )}
    >
      <div
        className={cn(styles.field, focus || value ? styles.fieldSelected : "")}
      >
        <input
          {...rest}
          type={showPassword ? "text" : "password"}
          value={value}
          className={cn(styles.input, className)}
          onChange={(event) => onChange(event)}
          onClick={() => setFocus(true)}
          onBlur={onBlur}
        />
        {<p className={styles.placeholder}>{placeholder}</p>}
        {value && !disabled && (
          <div
            className={styles.clearBtn}
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon width={22} height={20}>
              <EyeIcon />
            </Icon>
          </div>
        )}
        {strengthIndicator && <StrengthIndicator password={value} />}
      </div>
      {caption && (
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

export default PasswordInput;
