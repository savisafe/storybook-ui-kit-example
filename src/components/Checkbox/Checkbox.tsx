import React from 'react';
import cn from 'classnames';
import styles from './checkbox.module.scss';
import ToolIcon from './Icons/tool-icon.svg';
import Icon from '../Icon/Icon.tsx';
import Tooltip from '../Tooltip/Tooltip.tsx';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  reversed?: boolean;
  tool?: boolean;
  error?: boolean;
  disabled?: boolean;
  disabledChecked?: boolean;
  title?: string;
  caption?: string;
  content?: string;
}

const Checkbox: React.FC<Props> = ({
  checked = false,
  reversed = false,
  onChange,
  title,
  tool = false,
  content,
  caption,
  error = false,
  disabled = false,
  disabledChecked = false,
  ...rest
}) => {
  return (
    <div
      className={cn(styles.checkbox, error && styles.checkbox_error, disabled && styles.checkbox_disabled, disabledChecked && styles.checkbox_disabledChecked, reversed ? styles.checkbox_reverse : '')}
    >
      <div className={styles.checkBlock}>
        <label className={styles.checkLabel}>
          <div className={styles.checkSwitchBox}>
            <input className={styles.checkInput} type="checkbox" checked={checked} onChange={onChange} {...rest} />
            <span className={styles.checkSwitch} />
          </div>
          <div className={styles.checkTitle}>{title}</div>
        </label>
        {tool && content && (
          <Tooltip content={content}>
            <Icon width={20} height={20} hoverType="hoverActive">
              <ToolIcon />
            </Icon>
          </Tooltip>
        )}
      </div>
      {caption && <div className={styles.checkCaption}>{caption}</div>}
    </div>
  );
};

export default Checkbox;
