import React from 'react';
import { movies } from '../data/movies';
import './demos.css';

export default function MovieTable() {
  return (
    <div className="movie-container">
      <div className="movie-headers">
        <div>Title</div>
        <div>Year</div>
        <div>Rating</div>
        <div>Director</div>
      </div>
      <div className="movie-body">
        <div className="movie-row">
          <div>Spirited Away</div>
          <div>2001</div>
          <div>5</div>
          <div>Hayao Miyazaki</div>
        </div>
        {movies.map((movie) => (
          <MovieRow key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

interface Movie {
  title: string;
  year: number;
  rating: number;
  director: string | string[];
  writer: string[];
  genres: string[];
  id: number;
}

interface MovieRowProps {
  movie: Movie;
}

function MovieRow(props: MovieRowProps) {
  return (
    <div className="movie-row">
      <div>{props.movie.title}</div>
      <div>{props.movie.year}</div>
      <div>{props.movie.rating}</div>
      <div>{props.movie.director}</div>
    </div>
  );
}

/*
  Create a MovieRow component
  Iterate over the movies array
  Generate a MovieRow component for each element of the array

*/
