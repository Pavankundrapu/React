import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  let link = "https://www.omdbapi.com/?apikey=10203a01&t=";
  let value = link + data;

  function handle(e) {
    e.preventDefault();
    fetch(value)
      .then(res => res.json())
      .then(info => {
        if (info.Response === "True") {
          setMovie(info);
          setError(null);
        } else {
          setMovie(null);
          setError(info.Error);
        }
      })
      .catch(err => {
        console.error('Error:', err);
        setError('An error occurred while fetching the movie data.');
        setMovie(null);
      });
  }

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Movie Title"
        required
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="w-full max-w-md p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={handle}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {movie && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <div className="flex justify-center items-center">
            <img src={movie.Poster} alt={movie.Title} className="mt-4 rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
