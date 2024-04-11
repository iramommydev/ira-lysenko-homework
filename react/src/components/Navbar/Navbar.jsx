// * Styles
import LINKS from './Data';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <ul className={styles.list}>
      {LINKS.map((link) => (
        <li className="Item" key={link.id}>
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
