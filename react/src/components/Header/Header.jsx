// * Styles
import styles from './Header.module.css';
// * Components
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Wrapper from '../Wrapper/Wrapper';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.wrapper}>
          <Logo></Logo>
          <Navbar></Navbar>
          <Search></Search>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
