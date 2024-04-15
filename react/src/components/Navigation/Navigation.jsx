// * Styles
import LIST from './Navigation.Data';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.list}>
      {LIST.map((list) => (
        <li className='Item' key={list.id}>
          {list.title}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
