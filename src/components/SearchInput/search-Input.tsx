import React, {FC, useState} from 'react';
import cn from 'classnames';
import {merge} from 'lodash';
import styles from './search-input.module.scss';
import CloseIcon from './Icons/close.svg';
import SearchIcon from './Icons/search-icon.svg';
import {Icon} from '../index.ts';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    value: string;
    error?: boolean;
    disabled?: boolean;
    caption?: string;
    placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({ className, value, placeholder, onChange, error, disabled, ...rest}) => {
    const [focus, setFocus] = useState(false);

    const onBlur = (e) => {
        !value && setFocus(false);
        rest.onBlur && rest.onBlur(e);
    };

    const onClear = (event) => {
        setFocus(false);
        const emptyEvent = merge({}, event, {
            target: {value: '', name: rest.name, id: rest.id},
        });
        onChange(emptyEvent);
    };

    return (
        <div className={cn(styles.wrap, error && styles.error, disabled && styles.disabled)}>
            <div className={cn(styles.field, focus || value ? styles.fieldSelected : '')}>
                <div className={styles.searchIcon}>
                    <Icon width={32} height={32}>
                        <SearchIcon/>
                    </Icon>
                </div>
                <input
                    placeholder={placeholder}
                    {...rest}
                    type="text"
                    value={value}
                    className={cn(styles.input, className)}
                    onChange={(event) => onChange(event)}
                    onClick={() => setFocus(true)}
                    onBlur={onBlur}
                />
                {value && !disabled && (
                    <div className={styles.clearBtn} onClick={(event) => onClear(event)}>
                        <Icon width={20} height={20}>
                            <CloseIcon/>
                        </Icon>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchInput;
