import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchInfo } from '../../helpers/fetchAPI';
import styles from './MovieDetails.module.css';
import noImage from '../../images/no_img.jpg';

const isActive = ({ isActive }) => {
  return isActive ? styles.link_active : styles.link;
};

export function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchInfo(`/movie/${movieId}`).then(async response =>
      setMovieInfo(await response.data)
    );
  }, [movieId]);

  const {
    title,
    vote_average: rating,
    overview,
    genres,
    poster_path: img,
  } = movieInfo;
  return (
    <>
      <button onClick={() => navigate(location?.state?.from ?? '/')}>
        {'<'} Back
      </button>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={img ? `https://image.tmdb.org/t/p/w500/${img}` : noImage}
          alt={`Poster of the ${title} movie`}
        ></img>
        <div className={styles.wrapper}>
          <p>
            <b>Genres:</b> {genres?.map(genre => `${genre.name}`).join(', ')}
          </p>
          <p>
            <b>User score:</b> {Math.round(rating * 10)}%
          </p>

          <p>
            <b>Overview: </b>
            {overview}
          </p>
        </div>
      </div>

      <div>
        <h3 className={styles.title}>Additional information</h3>
      </div>
      <div className={styles.links_container}>
        <NavLink className={isActive} to="cast">
          Cast
        </NavLink>
        <NavLink className={isActive} to="reviews">
          Reviews
        </NavLink>
      </div>

      <div className={styles.wrapper}>
        <Suspense fallback={<h2>Loading ... Please wait</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
