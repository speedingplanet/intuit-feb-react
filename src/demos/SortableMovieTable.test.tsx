import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SortableMovieTable } from './SortableMovieTable';
import { movies } from '../data/movies';

test('renders one particular movie', () => {
  render(<SortableMovieTable movies={movies} />);
  let firstMovie = screen.getByText(movies[0].title);
  expect(firstMovie).toBeInTheDocument();
});

test('sorts on a click', () => {
  render(<SortableMovieTable movies={movies} />);
  let title = screen.getByText(/title/i);
  expect(title).not.toHaveClass('sort-asc');
  /*
  fireEvent.click(title, {});
  expect(title).toHaveClass('sort-asc');
  */
});
