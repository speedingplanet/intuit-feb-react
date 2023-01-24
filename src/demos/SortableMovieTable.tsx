import React, { useState } from 'react';
import { orderBy, startCase } from 'lodash';
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

type SortDirection = 'asc' | 'desc' | undefined;
type SortConfig = {
  sortColumn: string | undefined;
  sortDirection: SortDirection;
};

interface SortableMovieTableProps {
  movies: Movie[];
}

export function SortableMovieTable({ movies }: SortableMovieTableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    sortColumn: undefined,
    sortDirection: 'asc',
  });

  const handleClickHeader = (field: string) => {
    let nextSortState: SortConfig = {
      sortColumn: field,
      sortDirection: 'asc',
    };

    if (field === sortConfig.sortColumn && sortConfig.sortDirection === 'asc') {
      nextSortState.sortDirection = 'desc';
    }

    setSortConfig(nextSortState);
  };

  let displayMovies = orderBy(movies, sortConfig.sortColumn, sortConfig.sortDirection);

  return (
    <div className="movie-container">
      <MovieHeader field="title" clickHeader={handleClickHeader} sortConfig={sortConfig} />
      <MovieHeader field="year" clickHeader={handleClickHeader} sortConfig={sortConfig} />
      <MovieHeader field="rating" clickHeader={handleClickHeader} sortConfig={sortConfig} />
      <MovieHeader field="director" clickHeader={handleClickHeader} sortConfig={sortConfig} />
      {displayMovies.map((movie) => (
        <MovieRow key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

/*
 * Chose to pass through the SortConfig to show off using the ::after pseudo-element
 * Could have passed in a sort indicator directly and just displayed that, instead.
 * The solution to Lab 7 passes a sort indicator directly.
 */
interface MovieHeaderProps {
  field: string;
  label?: string;
  sortConfig: SortConfig;
  clickHeader: (field: string) => void;
}

function MovieHeader({ field, label, clickHeader, sortConfig }: MovieHeaderProps) {
  let classes = 'movie-headers clickable ';
  if (sortConfig.sortColumn === field) {
    if (sortConfig.sortDirection === 'asc') {
      classes += 'sort-asc';
    } else if (sortConfig.sortDirection === 'desc') {
      classes += 'sort-desc';
    }
  }
  return (
    <div className={classes} onClick={() => clickHeader(field)}>
      <span>{label || startCase(field)}</span>
    </div>
  );
}

interface MovieRowProps {
  movie: Movie;
}

function MovieRow({ movie }: MovieRowProps) {
  return (
    <>
      <div data-testid={`movie-title-${movie.id}`} className="movie-row">
        {movie.title}
      </div>
      <div data-testid={`movie-year-${movie.id}`} className="movie-row">
        {movie.year}
      </div>
      <div data-testid={`movie-rating-${movie.id}`} className="movie-row">
        {movie.rating}
      </div>
      <div data-testid={`movie-director-${movie.id}`} className="movie-row">
        {movie.director}
      </div>
    </>
  );
}

export default function StandaloneSortableMovieTable() {
  return <SortableMovieTable movies={movies} />;
}
