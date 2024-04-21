// * Styles
import styles from './Header.module.css';
// * Components
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Wrapper from '../Wrapper/Wrapper';
import Search from '../Search/Search';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.wrapper}>
          <Logo />
          <Navigation />
          <Search />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
