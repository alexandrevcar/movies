import MovieItem from "./MovieItem";
import movies from "./data/popular.json";

export default function MoviesList() {
  const moviesItems = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return <div id="content">{moviesItems}</div>;
}
