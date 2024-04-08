import mainStyles from '../../styles/main.module.css';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className ={mainStyles.wrapper}>
    <header className={styles.header}>
      <div className={styles['wrapper-header']}>
        <Logo></Logo>
        <Navbar></Navbar>
        <Button></Button>
      </div>
    </header>
    </div>
  );
};

export default Header;
