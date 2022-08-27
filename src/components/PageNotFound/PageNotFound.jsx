import { Link } from 'react-router-dom';

export function PageNotFound() {
  return (
    <h2>
      Sorry! Page is not found. Check your URL or{' '}
      <Link to={'/'}>try again</Link>
    </h2>
  );
}
