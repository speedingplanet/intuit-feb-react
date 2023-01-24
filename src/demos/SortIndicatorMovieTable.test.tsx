import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SortableMovieTable } from './SortIndicatorMovieTable';
import { movies } from '../data/movies';

test('renders one particular movie', () => {
  render(<SortableMovieTable movies={movies} />);
  let firstMovie = screen.getByText(movies[0].title);
  expect(firstMovie).toBeInTheDocument();
});

test('toggle sort indicator ascending', async () => {
  render(<SortableMovieTable movies={movies} />);

  // Create a regular expression instance, which we can re-use
  let ascIndicator = new RegExp('🔼');
  let indicator = screen.queryByText(ascIndicator);
  let title = screen.getByText(/title/i);

  expect(title).toBeInTheDocument();
  expect(indicator).not.toBeInTheDocument();

  fireEvent.click(title);
  indicator = screen.queryByText(ascIndicator);
  expect(indicator).toBeInTheDocument();
});
