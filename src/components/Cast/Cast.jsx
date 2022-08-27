import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInfo } from '../../helpers/fetchAPI';
import noImage from '../../images/no_img.jpg';

import styles from './Cast.module.css';

export default function Cast() {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchInfo(`/movie/${movieId}/credits`).then(async response =>
      setCastList(await response.data.cast)
    );
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {castList ? (
        castList.map(({ id, name, character, profile_path: img }) => (
          <li key={id} className={styles.list_item}>
            <img
              className={styles.image}
              src={img ? `https://image.tmdb.org/t/p/w500${img}` : noImage}
              alt={character}
            ></img>
            <p className={styles.name}>
              <b>{name}</b> starring as <i>{character}</i>
            </p>
          </li>
        ))
      ) : (
        <h2>Cast information is not available</h2>
      )}
    </ul>
  );
}
