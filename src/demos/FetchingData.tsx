import React, { useState, useEffect } from 'react';
import { SortableMovieTable } from './SortableMovieTable';

export default function FetchingData() {
  const [movies, setMovies] = useState([]);

  // Fetches movies only once, at component load time
  // useEffect(what to do, [what to watch for changes])
  useEffect(() => {
    fetch('http://localhost:8000/movies?_delay=3000')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Bad fetch response: ' + response.status);
        }
      })
      .then((movies) => setMovies(movies))
      .catch((error) => console.error('Could not fetch movies:', error));
  }, []);

  return (
    <>
      <div className="row">
        <header className="col">
          <h4>Fetching data (with promises)</h4>
        </header>
      </div>
      <div className="row">
        <div className="col">
          {movies.length === 0 ? <p>Loading movies....</p> : <SortableMovieTable movies={movies} />}
        </div>
      </div>
    </>
  );
}
