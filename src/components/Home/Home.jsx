import { fetchInfo } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { StyledUl } from './Home.styled';
import { MovieCard } from '../MovieCard/MovieCard';
import { StyledLink } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchInfo('trending/movie/day').then(async response =>
      setMovies(await response.data.results)
    );
  }, []);
  return (
    <StyledUl>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </StyledLink>
        </li>
      ))}
    </StyledUl>
  );
}
