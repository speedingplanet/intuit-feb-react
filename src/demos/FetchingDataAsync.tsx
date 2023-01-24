import React, { useState, useEffect } from 'react';
import { SortableMovieTable } from './SortableMovieTable';

export default function FetchingData() {
  const [movies, setMovies] = useState([]);

  // Fetches movies only once, at component load time
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('http://localhost:8000/movies');

        if (response.ok) {
          let movies = await response.json();
          setMovies(movies);
        } else {
          throw new Error('Bad fetch response: ' + response.status);
        }
      } catch (error) {
        console.error('Could not fetch movies:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        <header className="col">
          <h4>Fetching data (with async/await)</h4>
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
