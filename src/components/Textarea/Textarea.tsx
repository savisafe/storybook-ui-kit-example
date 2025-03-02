import React, { FC } from "react";
import cn from "classnames";
import Icon from "../Icon/Icon.tsx";
import styles from "./textarea.module.scss";
import ResizeIcon from "./icons/textarea-resize.svg";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  value: string;
  error?: boolean;
  disabled?: boolean;
  caption?: string;
}

const Textarea: FC<Props> = ({
  className,
  value,
  placeholder,
  onChange,
  error,
  disabled,
  caption,
  ...rest
}) => {
  return (
    <div
      className={cn(
        styles.wrap,
        error && styles.error,
        disabled && styles.disabled
      )}
    >
      <div className={styles.field}>
        <textarea
          {...rest}
          value={value}
          className={cn(styles.input, className)}
          onChange={(event) => onChange(event)}
          placeholder={placeholder}
        />
        <div className={styles.resize}>
          <Icon width={8} height={8}>
            <ResizeIcon />
          </Icon>
        </div>
      </div>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};

export default Textarea;
