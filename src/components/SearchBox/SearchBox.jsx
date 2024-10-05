import { Children, useState, React, useEffect, Component, useId } from 'react';
import clsx from 'clsx';
import styles from './SearchBox.module.css';

const SearchBox = ({ toFilter, setToFilter }) => {
  const searchName = useId();

  return (
    <div className={clsx(styles.searchWrapper)}>
      <label htmlFor={searchName}>
        Find contacts by name
        <input
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
