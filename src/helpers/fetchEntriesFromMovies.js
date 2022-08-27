export default function fetchEntriesFromMovies(movies) {
  return movies.map(({ poster_path: img, title, release_date, id }) => ({
    id,
    img,
    title,
    release_date,
  }));
}
