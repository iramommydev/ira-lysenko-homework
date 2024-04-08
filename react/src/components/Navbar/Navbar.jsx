import styles from './Navbar.module.css';

const Navbar = () => {
const navigationLinks = [
  { title: 'about', id: 1 },
  { title: 'works', id: 2 },
  { title: 'blog', id: 3 },
  { title: 'contact', id: 4 },
];
const listItems = navigationLinks.map(link => 
<li className= 'navigationItem' key={link.id}>
  {link.title}
</li>
);

return (
  <ul className={styles.navigationList}>{listItems}</ul>
);
};

export default Navbar;