import React, { FC, ReactNode } from 'react';
import styles from './dropdown-window.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropdownWindow: FC<Props> = ({ children }) => {
  return <div className={styles.dropDownWindow}>{children}</div>;
};

export default DropdownWindow;
