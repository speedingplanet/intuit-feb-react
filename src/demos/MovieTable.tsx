import React from 'react';
import { movies } from '../data/movies';
import './demos.css';

interface Movie {
  title: string;
  year: number;
  rating: number;
  director: string | string[];
  writer: string[];
  genres: string[];
  id: number;
}

export default function MovieTable() {
  return (
    <div className="movie-container">
      <div className="movie-headers">Title</div>
      <div className="movie-headers">Year</div>
      <div className="movie-headers">Rating</div>
      <div className="movie-headers">Director</div>
      {movies.map((movie) => (
        <MovieRow key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

interface MovieRowProps {
  movie: Movie;
}

export function MovieRow({ movie }: MovieRowProps) {
  return (
    <>
      <div className="movie-row">{movie.title}</div>
      <div className="movie-row">{movie.year}</div>
      <div className="movie-row">{movie.rating}</div>
      <div className="movie-row">{movie.director}</div>
    </>
  );
}
