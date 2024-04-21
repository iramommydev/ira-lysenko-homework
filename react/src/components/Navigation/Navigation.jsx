import { Link } from 'react-router-dom';
import LIST from './Navigation.data';
// * Styles
import styles from './Navigation.module.css';


const Navigation = () => {
  return (
    <ul className={styles.list}>
      {LIST.map((list) => (
        <li className='Item' key={`navigation-item-${list.to}`}>
          <Link to={list.to}>{list.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
