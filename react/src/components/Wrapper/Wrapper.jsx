import styles from './Wrapper.module.css';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {

  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
