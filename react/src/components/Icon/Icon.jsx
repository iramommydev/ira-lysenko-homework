import ICONS from './Icon.data';
import cn from 'classnames';

import styles from './Icon.module.css';

// eslint-disable-next-line react/prop-types
const Icon = ({ className = [], icon='manifest' }) => {
  return (
    <svg className={cn(styles.icon, styles.manifest, className)} viewBox='0 0 32 32'>
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
