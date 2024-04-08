import { useState } from 'react';
import mainStyles from '../../styles/main.module.css';
import buttonImage from '../../assets/search.svg';

const Button = () => {
  const [showInput, setShowInput] = useState(false);
  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className={mainStyles.buttons} onClick={toggleInput}>
      <img src={buttonImage} alt="Search" />
      {showInput && (
        <input type="text" placeholder="Введіть текст для пошуку..." />
      )}
    </div>
  );
};

export default Button;
