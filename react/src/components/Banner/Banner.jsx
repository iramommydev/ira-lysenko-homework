import mainStyles from '../../styles/main.module.css';
import styles from './Banner.module.css';

const Title = 'Manifest is a newborn theme. Clean, simple and fast.';
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={mainStyles.wrapper}>
        <h1 className={styles.title}>{Title}</h1>
      </div>
    </div>
  );
};

export default Banner;
