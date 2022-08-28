import { fetchInfo } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledUl } from 'components/Movies/Movies.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import fetchEntriesFromMovies from 'helpers/fetchEntriesFromMovies';

// import { StyledInput } from './Movies.styled';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  IconStyles,
} from './Movies.styled';
import { ReactComponent as SearchIcon } from '../../images/icon-search.svg';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchInfo(`/search/movie`, { query: query }).then(async data => {
      const filteredArray = fetchEntriesFromMovies(await data.data.results);
      setMoviesList(filteredArray);
    });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" name="query" id="query" />
        <StyledButton type="submit">
          <SearchIcon style={IconStyles} />
        </StyledButton>
      </StyledForm>
      <StyledUl>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </StyledUl>
    </>
  );
}
