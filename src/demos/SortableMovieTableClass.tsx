import React from 'react';
import { orderBy, startCase } from 'lodash';
import { movies } from '../data/movies';
import './demos.css';

export interface Movie {
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

export class SortableMovieTable extends React.Component<SortableMovieTableProps, SortConfig> {
  constructor(props: SortableMovieTableProps) {
    super(props); // sets up this.props
    this.handleClickHeader = this.handleClickHeader.bind(this);
    this.state = {
      sortColumn: undefined,
      sortDirection: 'asc',
    };
    console.log('SortableMovieTable as a class');
  }

  handleClickHeader(field: string) {
    let nextSortState: SortConfig = {
      sortColumn: field,
      sortDirection: 'asc',
    };

    if (field === this.state.sortColumn && this.state.sortDirection === 'asc') {
      nextSortState.sortDirection = 'desc';
    }

    this.setState(nextSortState);
  }

  render() {
    let displayMovies = orderBy(this.props.movies, this.state.sortColumn, this.state.sortDirection);

    return (
      <div className="movie-container">
        <MovieHeader field="title" clickHeader={this.handleClickHeader} sortConfig={this.state} />
        <MovieHeader field="year" clickHeader={this.handleClickHeader} sortConfig={this.state} />
        <MovieHeader field="rating" clickHeader={this.handleClickHeader} sortConfig={this.state} />
        <MovieHeader
          field="director"
          clickHeader={this.handleClickHeader}
          sortConfig={this.state}
        />
        {displayMovies.map((movie) => (
          <MovieRow key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
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
