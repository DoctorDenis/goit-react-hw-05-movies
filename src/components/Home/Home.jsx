import { fetchInfo } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { StyledUl } from './Home.styled';
import { MovieCard } from '../MovieCard/MovieCard';
import { StyledLink } from './Home.styled';
import fetchEntriesFromMovies from 'helpers/fetchEntriesFromMovies';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchInfo('trending/movie/day').then(async response => {
      const filteredArray = fetchEntriesFromMovies(await response.data.results);
      setMovies(filteredArray);
    });
  }, []);

  return (
    <StyledUl>
      {movies.map(
        movie =>
          (movie = (
            <li key={movie.id}>
              <StyledLink to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </StyledLink>
            </li>
          ))
      )}
    </StyledUl>
  );
}
