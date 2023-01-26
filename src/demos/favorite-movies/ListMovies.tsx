import React from 'react';
import { Movie } from './FavoriteMovies';

interface ListMoviesProps {
  movies: Movie[];
}

export default function ListMovies({ movies }: ListMoviesProps) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => {
          return (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
