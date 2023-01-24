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
    console.log('Ran handleClickHeader');
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

  let getSortIndicator = (field: string) => {
    if (sortConfig.sortColumn === field) {
      if (sortConfig.sortDirection === 'asc') {
        return ' 🔼';
      } else if (sortConfig.sortDirection === 'desc') {
        return ' 🔽';
      } else {
        return '';
      }
    }
  };

  return (
    <div className="movie-container">
      <MovieHeader
        field="title"
        clickHeader={handleClickHeader}
        sortIndicator={getSortIndicator('title')}
      />
      <MovieHeader
        field="year"
        clickHeader={handleClickHeader}
        sortIndicator={getSortIndicator('year')}
      />
      <MovieHeader
        field="rating"
        clickHeader={handleClickHeader}
        sortIndicator={getSortIndicator('rating')}
      />
      <MovieHeader
        field="director"
        clickHeader={handleClickHeader}
        sortIndicator={getSortIndicator('director')}
      />
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
  sortIndicator?: string;
  clickHeader: (field: string) => void;
}

function MovieHeader({ field, label, clickHeader, sortIndicator }: MovieHeaderProps) {
  let classes = 'movie-headers clickable ';
  return (
    <div className={classes} onClick={() => clickHeader(field)}>
      <span>
        {label || startCase(field)}&nbsp;{sortIndicator || ''}
      </span>
    </div>
  );
}

interface MovieRowProps {
  movie: Movie;
}

function MovieRow({ movie }: MovieRowProps) {
  return (
    <>
      <div className="movie-row">{movie.title}</div>
      <div className="movie-row">{movie.year}</div>
      <div className="movie-row">{movie.rating}</div>
      <div className="movie-row">{movie.director}</div>
    </>
  );
}

export default function StandaloneSortableMovieTable() {
  return <SortableMovieTable movies={movies} />;
}
