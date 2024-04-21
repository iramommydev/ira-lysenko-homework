/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// * Base
import cn from 'classnames';
// * Styles
import styles from './Button.module.css';

const Button = ({
  text = 'Default text',
  type = 'button',
  color = 'default',
  href = '',
  onClick,
  disabled = false,
}) => {
  const styleList = [styles.button];
  switch (color) {
    case 'lightblue': {
      styleList.push(styles.lightblue);
      break;
    }
    case 'grey': {
      styleList.push(styles.grey);
      break;
    }
    default: {
      console.log('set the button');
    }
  }
  if (href)
    return (
      <Link text={text} href={href} onClick={onClick} styleList={styleList} />
    );
  return (
    <button
      type={type}
      className={cn(styleList)}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};
const Link = ({ text, href, onClick, styleList }) => {
  return (
    <a target='_blank' href={href} onClick={onClick} className={cn(styleList)}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
