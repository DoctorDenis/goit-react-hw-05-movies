import noImage from '../../images/no_img.jpg';
import { Card } from './MovieCard.styled';
import PropTypes from 'prop-types';

export function MovieCard({ movie }) {
  const { img, title, release_date } = movie;
  return (
    <Card>
      <img
        src={img ? `https://image.tmdb.org/t/p/w500${img}` : noImage}
        alt={`Poster of ${title} movie`}
      ></img>
      <h3>
        {title} ({release_date?.split('-')[0]})
      </h3>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};
