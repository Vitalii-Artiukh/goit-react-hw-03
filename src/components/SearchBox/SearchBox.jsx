import { React, useId } from 'react';
import clsx from 'clsx';
import styles from './SearchBox.module.css';

const SearchBox = ({ toFilter, setToFilter }) => {
  const searchName = useId();

  return (
    <div className={clsx(styles.searchWrapper)}>
      <label htmlFor={searchName} className={clsx(styles.label)}>
        Find contacts by name
        <input
          className={clsx(styles.input)}
          type="text"
          id={searchName}
          value={toFilter}
          onChange={event => setToFilter(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
