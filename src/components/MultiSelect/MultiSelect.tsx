import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { debounce } from 'lodash';
import styles from './multi-select.module.scss';
import CloseIcon from './icons/close.svg';
import DeleteTagIcon from './icons/delete-tag.svg';
import SelectIcon from './icons/select.svg';
import ErrorIcon from './icons/caption.svg';
import Icon from '../Icon/Icon';

export interface Props {
  data: { tag: string }[];
  onChange: (tags: string) => void;
  setFormValue: (array: string[]) => void;
  className?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  caption?: string;
  placeholder?: string;
  defaultTags?: { tag: string }[];
  name: string;
  id: string;
  onBlur: (e) => void;
}

const MultiSelect: FC<Props> = ({
  data: initialData = [],
  className,
  value = '',
  placeholder,
  onChange,
  error,
  disabled,
  caption,
  setFormValue,
  defaultTags,
  ...rest
}): React.ReactElement | null => {
  const [open, setOpen] = useState(false);
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [data, setData] = useState(initialData);
  const [searchValue, setSearchValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (defaultTags) {
      setTagsArray(defaultTags.map((element) => element.tag));
    }
  }, [defaultTags]);

  useEffect(() => {
    initialData.length && setData(initialData);
  }, [initialData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const addTag = (tag: string) => {
    setOpen(false);
    if (tag === '' || tagsArray.includes(tag)) return;
    setTagsArray((prevArray) => {
      const newArray = [...prevArray, tag];
      setFormValue(newArray);
      return newArray;
    });
    setData((prevData) => prevData.filter((item) => item.tag !== tag));
    setSearchValue('');
  };

  const addNewTag = (tag: string) => {
    if (tag === '' || tagsArray.includes(tag)) return;
    setTagsArray((prevArray) => [...prevArray, tag]);
    setFormValue([...tagsArray, tag]);
    setOpen(false);
    setSearchValue('');
  };

  const deleteTag = (tag: string) => {
    setTagsArray((prevArray) => prevArray.filter((item) => item !== tag));
    setFormValue(tagsArray.filter((item) => item !== tag));
    setData((prevArray) => [...prevArray, { tag: tag }]);
  };

  const debouncedOnChange = useCallback(debounce(onChange, 600), [onChange]);

  const searchTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value) {
      debouncedOnChange(value);
    }
  };

  const onClear = () => {
    setSearchValue('');
  };

  const renderOptions = () => {
    const arrayBySearchValue = data.filter((item) => item.tag.toLowerCase().includes(searchValue.toLowerCase()));
    const arrayToRender = searchValue ? arrayBySearchValue : data;

    if (arrayToRender.length) {
      return (
        <div className={styles.list__tags}>
          {arrayToRender.map((item) => (
            <div key={item.tag} className={styles.tag} onClick={() => addTag(item.tag)}>
              {item.tag}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={styles.tag} onClick={() => addNewTag(searchValue)}>
        Добавить тег
      </div>
    );
  };

  return (
    <div className={cn(styles.wrap, error && styles.error, disabled && styles.disabled)} ref={inputRef}>
      <div className={cn(styles.field, open || tagsArray.length > 0 ? styles.fieldSelected : '')}>
        <input
          {...rest}
          type="text"
          value={searchValue}
          onClick={() => setOpen(!open)}
          className={cn(styles.input, className)}
          onChange={(event) => {
            searchTag(event);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTag(e.currentTarget.value);
              setOpen(false);
              setSearchValue('');
            }
          }}
          autoComplete="off"
        />
        {<p className={styles.placeholder}>{!searchValue && placeholder}</p>}
        {open && <>{renderOptions()}</>}
        <div className={styles.icons}>
          {searchValue.length > 0 && (
            <div className={styles.clearBtn} onClick={onClear}>
              <Icon width={20} height={20}>
                <CloseIcon />
              </Icon>
            </div>
          )}
          <div className={cn(styles.select, open ? '' : styles.select__active)} onClick={() => setOpen(!open)}>
            <Icon width={20} height={20}>
              <SelectIcon />
            </Icon>
          </div>
        </div>
      </div>
      <div className={styles.selected__tags}>
        {tagsArray.map((tag) => (
          <div key={tag} className={styles.selected__tag}>
            {tag}
            <Icon
              width={14}
              height={14}
              onClick={() => {
                deleteTag(tag);
              }}
            >
              <DeleteTagIcon />
            </Icon>
          </div>
        ))}
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

export default MultiSelect;
