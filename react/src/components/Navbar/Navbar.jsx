// * Styles
import styles from './Navbar.module.css';

const Navbar = () => {
  const links = [
    { title: 'about', id: 1 },
    { title: 'works', id: 2 },
    { title: 'blog', id: 3 },
    { title: 'contact', id: 4 },
  ];

  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li className="Item" key={link.id}>
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
