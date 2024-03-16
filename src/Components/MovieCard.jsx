export default function Movie({ movie }) {
  return (
   <div className="movie">
    <div>
      <p>{movie.Year}</p>
    </div>
    <div>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
    </div>
    <div><span>{movie.Type}</span></div>
    <h3 className="movie-title">{movie.Title}</h3>
  </div>
  );
}
