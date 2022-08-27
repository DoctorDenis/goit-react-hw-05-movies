import noImage from '../../images/no_img.jpg';
import { Card } from './MovieCard.styled';

export function MovieCard({ movie }) {
  const { poster_path: img, title, release_date } = movie;
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
