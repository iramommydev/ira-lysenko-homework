// * Base
import { useState } from 'react';
import cn from 'classnames';
// * Styles
import mainStyles from '../../styles/main.module.css';
import searchImage from '../../assets/search.svg';
import styles from './Search.module.css';

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const toggleInput = () => {
    if (showInput) setShowInput(false);
    else {
      setShowInput(true);
    }
  };

  return (
    <div className={mainStyles.buttons} onClick={toggleInput}>
      <img src={searchImage} alt="Search" />
      {showInput && (
        <input
          className={cn([mainStyles.input, styles.color])}
          type="text"
          placeholder="Введіть текст для пошуку..."
        />
      )}
    </div>
  );
};

export default Search;
