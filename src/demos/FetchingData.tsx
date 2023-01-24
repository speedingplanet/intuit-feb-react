import React, { useState, useEffect } from 'react';
import { SortableMovieTable } from './SortableMovieTable';

export default function FetchingData() {
  const [movies, setMovies] = useState([]);

  // Fetches movies only once, at component load time
  useEffect(() => {
    fetch('http://localhost:8000/movies')
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
    <>{movies.length === 0 ? <p>Loading movies....</p> : <SortableMovieTable movies={movies} />}</>
  );
}
