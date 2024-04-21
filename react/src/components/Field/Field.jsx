/* eslint-disable react/prop-types */

import styles from './Field.module.css';

const Field = ({
  title,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        <div className={styles.error}>{error}</div>
      </label>
    </>
  );
};

export default Field;
