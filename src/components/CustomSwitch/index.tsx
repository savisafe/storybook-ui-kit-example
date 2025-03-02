import React from 'react';
import cn from 'classnames';
import styles from './switch.module.scss'
import ToolIcon from './images/tool-icon.svg';
import { Icon, Tooltip } from '../index.ts';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  reversed?: boolean;
  tool?: boolean;
  error?: boolean;
  disabledChecked?: boolean;
  disabled?: boolean;
  title?: string;
  caption?: string;
  content?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  reversed = false,
  title,
  tool = false,
  content,
  caption,
  error = false,
  disabled = false,
  disabledChecked = false,
  onChange,
  ...rest
}) => {
  return (
    <div className={cn(styles.switchBox, error && styles.switchBox_error, disabled && styles.switchBox_disabled, disabledChecked && styles.switchBox_disabledChecked, reversed && styles.switchBox_reverse)}>
      <div className={styles.checkBlock}>
        <label className={styles.switchLabel}>
          <div className={styles.checkSwitchBox}>
            <input className={styles.switchInput} type="checkbox" checked={checked} onChange={onChange} {...rest} />
            <span className={styles.checkSwitch} />
          </div>
          <div className={styles.switchTitle}>{title}</div>
        </label>
        {tool && content && (
          <Tooltip content={content}>
            <Icon width={20} height={20} hoverType="hoverActive">
              <ToolIcon />
            </Icon>
          </Tooltip>
        )}
      </div>
      {caption && <div className={styles.switchCaption}>{caption}</div>}
    </div>
  );
};

export default Switch;
