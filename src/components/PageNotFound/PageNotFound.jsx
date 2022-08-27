import { Link } from 'react-router-dom';
import styles from '../../index.module.css';

export function PageNotFound() {
  return (
    <h2>
      Sorry! Page is not found. Check your URL or{' '}
      <Link className={styles.link_to_home} to={'/'}>
        try again
      </Link>
    </h2>
  );
}
