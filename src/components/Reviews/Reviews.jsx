import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInfo } from '../../helpers/fetchAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchInfo(`/movie/${movieId}/reviews`).then(async response =>
      setReviews(await response.data.results)
    );
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, created_at, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>Published: {new Date(created_at).toUTCString()}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <h3>Sorry! We have no reviews for this movie yet.</h3>
      )}
    </ul>
  );
}
