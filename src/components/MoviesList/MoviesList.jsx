import { useLocation } from 'react-router-dom';
import { StyledLink } from './MoviesList.styled';
import { MovieCard } from '../MovieCard/MovieCard';

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(
        movie =>
          (movie = (
            <li key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                <MovieCard movie={movie} />
              </StyledLink>
            </li>
          ))
      )}
    </ul>
  );
}
