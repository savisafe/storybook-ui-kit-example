import React, { FC } from 'react';
import styles from './dropdown-window-list.module.scss';
import { SelectOption } from '../Select.tsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  selectOptions: SelectOption[];
  onItemClick: (value: string) => void;
  closeDropdown: (isClosed: boolean) => void;
}

const DropdownWindowList: FC<Props> = ({ selectOptions, onItemClick, closeDropdown }) => {
  const handleItemClick = (title) => {
    onItemClick(title);
    closeDropdown(false);
  };
  return (
    <>
      {selectOptions &&
        selectOptions.map((option) => (
          <div key={option.id} className={styles.item} onClick={() => handleItemClick(option.title)}>
            {option.title}
          </div>
        ))}
    </>
  );
};

export default DropdownWindowList;
