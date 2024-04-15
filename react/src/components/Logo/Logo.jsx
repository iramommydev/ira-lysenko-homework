// * Components
import Icon from '../Icon/Icon';
// * Styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Icon icon='manifest'></Icon>
    </div>
  );
};

export default Logo;
